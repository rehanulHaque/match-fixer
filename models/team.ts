import mongoose from "mongoose";

const teamSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  teamName: {
    type: String,
    required: true,
  },
  playingSide: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    default: true,
  },
  alreadyFixed: {
    type: Boolean,
    default: false,
  }
});

export const Team = mongoose.models?.team || mongoose.model("team", teamSchema);
