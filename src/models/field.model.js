const mongoose = require("mongoose");

const FieldSchema = new mongoose.Schema({

    fid: {
        type: Number,
        unique: "Already used",
        required: "Please provide fid on the board logic"
    },
    name: {
        type: String,
        default: "Field xx",
    },
    created: {
        type: Date,
        default: Date.now,
    },
    updated_time: {
        type: Date,
        default : Date.now,
    },
    Location : {
        type: String,
    },
    uid: {
        type: Number,
        required: "Please provide userid on the board"
    }

});

FieldSchema.method("toJSON", function() {
    const { __v, _id, ...object} = this.toObject();
    object.id = _id;
    return object;
})

module.exports = mongoose.model("Field", FieldSchema);
