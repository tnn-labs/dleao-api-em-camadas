// {
//   user: 'Jhon Doe',
//   username: 'jhon-doe'
// }

const { saveUserRepository } = require('../../repositories/users/saveUserRepository');

const executeUserService = (data) => {
  if (!data.username) {
    throw new Error('Username é obrigatório');
  }

  return saveUserRepository(data);
};

module.exports = { executeUserService };