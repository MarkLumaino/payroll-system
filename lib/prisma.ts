import { PrismaClient } from '@prisma/client';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';

const adapter = new PrismaMariaDb({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'testtest',
  database: 'payroll_system',
  connectionLimit: 5,
});

export const prisma = new PrismaClient({ adapter });
