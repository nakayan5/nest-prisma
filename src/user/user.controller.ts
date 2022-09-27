import { Body, Controller, Post } from '@nestjs/common';

import { UserService } from './user.service';

import { Prisma, User } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() data: Prisma.UserCreateInput): Promise<User> {
    console.log('data =======================', data);

    return this.userService.create(data);
  }
}
