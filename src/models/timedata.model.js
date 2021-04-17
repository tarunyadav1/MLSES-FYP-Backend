
const mongoose = require("mongoose");

const timedataSchema = new mongoose.Schema ( {
    epoch : {
        type : Date,
        unique: "already added",
        required : "Please provide time",
        default : Date.now

    },
    fid : {
        type: Number,

    },

    sid : {
        type: Number,
    },
    humidity : {
        type: Number,

    },
    gas : {
        type : Number,

    },
    temperature : {
        type : Number,
    },
    mlevel0:
    {
        type : Number,
    },
    mlevel1:
    {
        type : Number,
    },
    mlevel2:
    {
        type : Number,
    },
    mlevel3:
    {
        type : Number,
    },

})

module.exports = mongoose.model('timedata',timedataSchema)