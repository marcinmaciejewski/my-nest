import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    const users = await this.userService.getUsers();
    return users;
  }

  @Post()
  async createUser(@Body() data): Promise<void> {
    const user = await this.userService.createUser(data);
  }
}
