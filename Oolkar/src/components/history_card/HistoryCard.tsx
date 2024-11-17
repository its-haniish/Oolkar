import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { Avatar } from 'react-native-paper';
import { styles } from './styles';
import { HistoryCardProps } from '../../types/Props';

const HistoryCard: React.FC<HistoryCardProps> = ({
    shopName,
    services,
    totalPrice,
    bookedAt,
    status,
    avatarSource
}) => {

    // Format the timestamp for the "Booked at" field
    const bookedAtFormatted = new Date(bookedAt).toLocaleTimeString();

    return (
        <View style={styles.mainContainer}>
            {/* Shop Name and Avatar */}
            <View style={styles.imageContainer}>
                <Avatar.Image size={30} source={avatarSource} />
                <Text style={styles.shopName}>{shopName}</Text>
            </View>

            {/* Services */}
            <View style={styles.imageContainer}>
                <Text style={styles.title}>Services: </Text>
                <Text style={styles.textContent}>
                    {services.map((service, index) => (
                        <Text key={index}>
                            {service.serviceName} ({service.price}₹)
                            {index < services.length - 1 && ', '}
                        </Text>
                    ))}
                </Text>
            </View>

            {/* Total Price and Booked Time */}
            <View style={styles.imageContainer}>
                <Text style={styles.priceTitle}>Total Price: </Text>
                <Text style={styles.priceTextContent}>₹{totalPrice}/-</Text>

                <Text style={styles.priceTitle}>Booked at: </Text>
                <Text style={styles.priceTextContent}>{bookedAtFormatted}</Text>
            </View>

            {/* Status */}
            <View style={styles.imageContainer}>
                <Text style={styles.title}>Status: </Text>
                <Text style={styles.textContent}>{status}</Text>
            </View>

            {/* Buttons */}
            <View style={styles.btnContainer}>
                <TouchableWithoutFeedback onPress={() => console.log('Book Again Pressed')}>
                    <View style={[styles.button, { backgroundColor: "black" }]}>
                        <Text style={styles.buttonText}>Book Again</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => console.log('Write Feedback Pressed')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Write Feedback?</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </View>
    );
}

export default HistoryCard;
