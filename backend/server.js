require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/connectDB.js');
const routes = require('./routes/routes.js');

const app = express({});
const PORT = process.env.PORT || 8080;
// Middleware
app.use(express.json({ limit: '50mb' }));
app.use(cors());

// Existing routes
app.use('/', routes);

app.get('/', (req, res) => {
    res.send('<h1>Server is running...</h1>');
});

// Connect to the database and start the server
connectDB(process.env.MONGO_URI).then(() => {
    app.listen(PORT, () => {
        console.log('Server is running on port:', PORT);
    });
});
