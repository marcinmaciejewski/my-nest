import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsersHello(): string {
    return 'Hello Users World!';
  }
}
