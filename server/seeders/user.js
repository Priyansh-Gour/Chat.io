import { User } from "../models/user.js";
import {faker, ur} from '@faker-js/faker'

const createUser = async (numUsers) => {
    try {

        const usersPromise = [];

        for (let i = 0; i < numUsers; i++) {
            const tempUser = User.create({
                name: faker.person.fullName(),
                username: faker.internet.userName(),
                bio: faker.lorem.sentence(10),
                password: "12345678",
                avatar: {
                    url: faker.image.avatar(),
                    public_id: faker.system.fileName(),
                },
            });

            usersPromise.push(tempUser);
        }
        
        await Promise.all(usersPromise);

        console.log("Users created successfully",numUsers);
        process.exit(1);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export { createUser };