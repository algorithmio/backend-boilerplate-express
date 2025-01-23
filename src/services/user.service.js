const { User} = require("../models");

const getUserByUsername = async (username) => {
  const user = await User.findOne({where: { username }});
  return user;
};

module.exports = {getUserByUsername};
