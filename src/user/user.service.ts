import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async findOne(userName: Pick<Prisma.UserWhereInput, 'name'>): Promise<User> {
    console.log('data ~~~~~', userName);

    return this.prisma.user.findFirst({ where: userName });
  }
}
