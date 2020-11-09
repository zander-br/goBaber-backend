import FakeUserRepository from '../repositories/fakes/UsersRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
  it('should be able to create a new user', async () => {
    const fakeUserRepository = new FakeUserRepository();
    const createUser = new CreateUserService(fakeUserRepository);

    const user = await createUser.execute({
      name: 'fake-name',
      email: 'fake.email@mail.com',
      password: 'fake-password',
    });

    expect(user).toHaveProperty('id');
  });
});
