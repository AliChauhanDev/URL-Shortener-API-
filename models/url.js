const mongoose = require('mongoose')

const URLscheme = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true
    },
    visitHistory: [{ timestemp: { type: Number } }],
},
{timestamp : true}
);

const URL = mongoose.model('url',URLscheme);

module.exports = URL;