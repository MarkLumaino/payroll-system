import { prisma } from './lib/prisma.ts';

async function main() {
  try {
    const employees = await prisma.$queryRaw`SELECT * FROM employees`;
    console.log(employees);
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
