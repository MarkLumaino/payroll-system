import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      firstName,
      middleName,
      lastName,
      idNumber,
      email,
      contactNumber,
      address,
      password,
    } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !password || !idNumber) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Check if email or ID already exists
    const existingUser = await prisma.employees.findFirst({
      where: { OR: [{ IDNumber: idNumber }, { FullName: email }] }, // adjust if you have an email field
    });

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new employee
    const newEmployee = await prisma.employees.create({
      data: {
        FullName: `${firstName} ${middleName ?? ""} ${lastName}`,
        IDNumber: Number(idNumber),
        Position: "New Hire", // default position
        Branch: "Main", // default branch
        Department: "Unknown", // default department
        Status: "Active",
        // Add related auth info in another table if needed (e.g., email/password)
      },
    });

    // TODO: Save password/email in an auth table if separate

    return NextResponse.json({ message: "User registered", user: newEmployee });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to register" }, { status: 500 });
  }
}
