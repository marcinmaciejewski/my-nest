import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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

    async createUser(data: Record<string, unknown>): Promise<void> {
        const user = await this.userRepository.create(data);
        this.userRepository.save(user);
    }
}
