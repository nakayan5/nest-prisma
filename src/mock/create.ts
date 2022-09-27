import { PrismaClient } from '@prisma/client';

const create = async () => {
  const prisma = new PrismaClient();
  const newUser = await prisma.user.create({
    data: { name: 'test', email: 'test@gmail.com' },
  });

  console.log({
    newUser,
  });

  await prisma.$disconnect();
};

create();
