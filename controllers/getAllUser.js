const User = require("../models/user.js");

const getAllUser = async (req, res) => {
  try {
    const reqData = await User.find();
    return res.status(200).json(reqData);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = getAllUser;
