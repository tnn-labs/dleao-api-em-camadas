let users = [];

const saveUserRepository = (user) => {
  const id = Math.random().toString();
  const userWithId = {
    ...user,
    id,
  };

  users.push(userWithId);
  return userWithId;
};

module.exports = { saveUserRepository };