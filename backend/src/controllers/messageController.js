export const createMessage = async (req, res) => {
  try {
    const { name, message } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    // Save message to database
    const newMessage = { name, message };
    await newMessage.save();

    // Send message to all connected clients
  } catch (error) {}
  res.status(201).json({ message: "Message created" });
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json({ message: "Messages fetched", data: messages });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await Message.findByIdAndDelete(id);
    res.status(200).json({ message: "Message deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
