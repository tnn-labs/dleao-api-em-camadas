// {
//   user: 'Jhon Doe',
//   username: 'jhon-doe'
// }

const { saveUser } = require('../../repositories/users/save-user');

const executeUser = (data) => {
  if (!data.username) {
    throw new Error('Username é obrigatório');
  }

  return saveUser(data);
};

module.exports = { executeUser };