import { Body, Controller, Get, Post, UseInterceptors, ClassSerializerInterceptor, Delete } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { DeleteUserDto } from './dto/delete-user.dto';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseInterceptors(ClassSerializerInterceptor)
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

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async createUser(@Body() data: CreateUserDto): Promise<User> {
    const user = await this.userService.createUser(data);
    return user;
  }

  @Delete()
  async deleteUser(@Body() id: DeleteUserDto): Promise<unknown> {
    const user = await this.userService.deleteUser(id);
    return user;
  }
}
