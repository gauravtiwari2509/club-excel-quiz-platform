import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma/prisma";

const SALT_ROUNDS = 10;

export async function handleSignUp(req: NextRequest, data: any) {
  const { name, email, password, isNistian, nistEmail, roll } = data;

  const existingUser = await prisma.user.findFirst({
    where: {
      OR: [
        { email },
        { nistEmail: isNistian ? nistEmail : null },
        { roll: isNistian ? roll : null },
      ],
    },
  });

  if (existingUser) {
    if (existingUser.email === email) {
      return NextResponse.json(
        { message: "User with this email already exists." },
        { status: 400 }
      );
    }
    if (isNistian && existingUser.nistEmail === nistEmail) {
      return NextResponse.json(
        { message: "NIST email already in use." },
        { status: 400 }
      );
    }
    if (isNistian && existingUser.roll === roll) {
      return NextResponse.json(
        { message: "Roll number already in use." },
        { status: 400 }
      );
    }
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      isNistian,
      nistEmail: isNistian ? nistEmail : null,
      roll: isNistian ? roll : null,
    },
  });

  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}