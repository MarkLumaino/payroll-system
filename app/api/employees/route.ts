import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const employees = await prisma.employees.findMany();
    return new Response(JSON.stringify(employees), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Failed to fetch employees' }), { status: 500 });
  }
}
