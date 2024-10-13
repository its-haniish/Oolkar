const express = require('express');
const routes = express.Router();

const {
    subscribe, unsubscribe
} = require('../controllers/subscribe');

routes
    // auth routes
    .post('/subscribe', subscribe)
    .post('/unsubscribe', unsubscribe)


module.exports = routes;
