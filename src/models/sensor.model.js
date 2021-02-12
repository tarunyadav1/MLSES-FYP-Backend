import mongoose from "mongoose";

const SensorSchema = new mongoose.Schema({

    value: {
        type: Number,
        default: 0,
    },

    created: {
        type: Date,
        default: Date.now,
    },
    updated: {
        type: Date,
    },
});

export default mongoose.model("Media", MediaSchema);
