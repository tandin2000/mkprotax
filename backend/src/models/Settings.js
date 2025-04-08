const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    bannerInfo: {
        title: String,
        description: String,
        imageUrl: String
    },
    openingHours: {
        openingTime: String,
        closingTime: String,
        days: [String]
    },
    socialMedia: {
        facebook: String,
        instagram: String,
        tiktok: String,
        linkedin: String
    },
    news: [{
        title: String,
        description: String,
        url: String,
        date: { type: Date, default: Date.now }
    }]
});

module.exports = mongoose.model('Settings', settingsSchema); 