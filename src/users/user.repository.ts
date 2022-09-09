import { Injectable } from "@nestjs/common";
import { EntityManager, EntityTarget, FindManyOptions, Repository } from "typeorm";
import { User } from "./user.entity";

export interface IUserRepository extends Repository<User> {
    find(options?: FindManyOptions): Promise<User[]>;
    seks(): Promise<User[]>;
}

@Injectable()
export class UserRepository extends Repository<User> implements IUserRepository {
    async find(options?: FindManyOptions<User>): Promise<User[]> {
        const users = [];
        return users.map(user => ({
            ...user,
            password: 'sranie',
        }));
    }
    async seks(): Promise<User[]> {
        return [];
    }
}