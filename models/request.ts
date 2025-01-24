import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
    senderUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    reciverUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "team",
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending"
    }
}, { timestamps: true });   

export const Request = mongoose.models?.request || mongoose.model("request", requestSchema);
