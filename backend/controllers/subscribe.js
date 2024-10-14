const fs = require('fs');
const path = require('path');
const SubscribedUsers = require("../models/SubscribedUsers");
const sendEmailFn = require("..//utils/sendEmailFn")


const subscribe = async (req, res) => {
    const { email } = req.body;
    try {
        // Check if the email is already subscribed
        const existingUser = await SubscribedUsers.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: 'Email already subscribed.',
            });
        }

        // Create a new subscription
        const userSubscribed = await SubscribedUsers.create({ email });

        // Check if the user was created successfully
        if (userSubscribed) {
            // Read the HTML file content
            const mailTemplatePath = path.join(__dirname, '../public/Subscription_mail.html');
            const mailContent = fs.readFileSync(mailTemplatePath, 'utf-8');

            // Send confirmation email using the HTML template
            try {
                await sendEmailFn({
                    email,
                    subject: 'Subscription Successful',
                    msg: mailContent,  // Use the HTML file content here
                });

                return res.status(200).json({
                    message: 'Subscribed successfully. Confirmation email sent.',
                });
            } catch (err) {
                console.error('Error sending confirmation email:', err);
                return res.status(500).json({
                    message: 'Subscribed successfully, but failed to send confirmation email.',
                });
            }
        } else {
            return res.status(400).json({
                message: 'Failed to subscribe.',
            });
        }

    } catch (error) {
        console.error('Error while subscribing:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const unsubscribe = async (req, res) => {
    const { email } = req.body;
    try {
        // Attempt to delete the user by email
        const result = await SubscribedUsers.deleteOne({ email });

        // Check if a document was deleted
        if (result.deletedCount > 0) {
            return res.status(200).json({
                message: 'Unsubscribed successfully.',
            });
        } else {
            return res.status(404).json({
                message: 'Email not found.',
            });
        }

    } catch (error) {
        console.error('Error while unsubscribing:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    subscribe,
    unsubscribe,
};
