import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
const Prisma =new PrismaClient();

// Create the adapter for your DB
const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "w09184835888",
  database: "forgot_password_db",
  connectionLimit: 5,
});

// Singleton for Next.js App Router
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
      new PrismaClient({
    adapter, // ← MUST include this
    log: ["query", "error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
