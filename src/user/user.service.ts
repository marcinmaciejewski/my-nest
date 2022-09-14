import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';
import encodePassword from '../utils/encodePassword';
@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    async getUsers(): Promise<User[]> {
        const users: User[] = await this.userRepository.find();
        return users;
    }

    async createUser(data: CreateUserDto): Promise<User> {
        const userData = {
            ...data,
            password: await encodePassword(data.password),
        };

        const user = await this.userRepository.create(userData);
        const result = await this.userRepository.save(user);
        return result;
    }

    async deleteUser(data: DeleteUserDto): Promise<unknown> {
        const user = await this.userRepository.findOneBy({id: data.id});
        const result = await this.userRepository.remove(user);
        return result;
    }
}
