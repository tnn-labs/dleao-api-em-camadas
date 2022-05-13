import { UserRepository } from '../repositories/user-repository.js'

class CreateUserService {
  execute(data) {
    if (!data.username) {
      throw new Error('Username é obrigatório');
    }

    const userRepository = new UserRepository();
    const existUser = userRepository.findByUsername(data.username);

    if (existUser) {
      throw new Error('Usuário já cadastrado!');
    }

    return userRepository.save(data);
  }
};

export { CreateUserService };