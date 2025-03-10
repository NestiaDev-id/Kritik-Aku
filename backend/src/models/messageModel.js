import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    name: { type: String, default: "anonymous" },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
