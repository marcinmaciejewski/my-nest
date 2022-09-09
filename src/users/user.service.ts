import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository, IUserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: IUserRepository,
    ) {}

    async getUsers(): Promise<User[]> {
        const users: User[] = await this.userRepository.find();
        return users;
    }

    async createUser(data: Record<string, unknown>): Promise<void> {
        const user = await this.userRepository.create(data);
        this.userRepository.save(user);
    }
}
