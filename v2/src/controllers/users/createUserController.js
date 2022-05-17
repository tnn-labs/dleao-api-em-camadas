const { executeUserService } = require('../../services/users/executeUserService');

const createUserController = (req, res) => {
  try {
    const result = executeUserService(req.body);
    return res.json(result);
  } catch (error) {
    return res.status(400).json({
      err: error.message,
    }); 
  }
};

module.exports = { createUserController };