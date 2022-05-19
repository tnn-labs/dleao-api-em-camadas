let users = [];

const saveUser = (user) => {
  const id = Math.random().toString();
  const userWithId = {
    ...user,
    id,
  };

  users.push(userWithId);
  return userWithId;
};

module.exports = { saveUser };