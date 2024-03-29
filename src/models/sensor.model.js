const mongoose = require("mongoose");

const SensorSchema = new mongoose.Schema({

    sid: {
        type: Number,
        unique: "Already used",
        required: "Please provide Sid on the board logic"
    },
    name: {
        type: String,
        default: "sensor xx",
    },
    created: {
        type: Date,
        default: Date.now,
    },
    updated_time: {
        type: Date,
        default : Date.now,
    },
    Offstatus: {
        type: Boolean,
        default: false,

    },
    relativeLocation : {
        type: String,
    },
    fid: {
        type: Number,
        required: "Please assign FieldId to the Sensor",
    }

});

SensorSchema.method("toJSON", function() {
    const { __v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
})

module.exports = mongoose.model("Sensor", SensorSchema);
