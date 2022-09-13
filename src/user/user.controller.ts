import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    let users;
    try {
      users = await this.userService.getUsers();
    } catch (error) {
      console.error(`Can not get users: ${error.message}`);
    }
    return users;
  }

  @Post()
  async createUser(@Body() data): Promise<void> {
    const user = await this.userService.createUser(data);
    return user;
  }
}
