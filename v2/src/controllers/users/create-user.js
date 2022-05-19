const { executeUser } = require('../../services/users/execute-user');

const createUser = (req, res) => {
  try {
    const result = executeUser(req.body);
    return res.json(result);
  } catch (error) {
    return res.status(400).json({
      err: error.message,
    }); 
  }
};

module.exports = { createUser };