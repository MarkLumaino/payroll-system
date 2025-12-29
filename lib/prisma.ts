import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

// Create the adapter for your DB
const adapter = new PrismaMariaDb({
  host: process.env.DB_HOST!,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER!,         //check .env file for username
  password: process.env.DB_PASSWORD!, //check .env file for password
  database: process.env.DB_NAME!,     //check .env file for database name
  connectionLimit: 5,
});


// Singleton for Next.js App Router
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    adapter, // ← MUST include this
    log: ["query", "error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}