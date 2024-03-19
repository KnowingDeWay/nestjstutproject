import { faker } from '@faker-js/faker';
import { User } from "../../modules/user/user.entity";
import { DataSource } from "typeorm";
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(User, (faker) => {
    const user = new User();
    user.name = faker.person.fullName();
    user.email = faker.internet.email();
    user.password = faker.internet.password();
    user.createdAt = new Date();
    user.updatedAt = user.createdAt;

    return user;
});