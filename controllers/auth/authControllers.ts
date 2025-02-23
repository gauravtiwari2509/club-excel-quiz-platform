import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma/prisma";

const SALT_ROUNDS = 10;

//add the types later
export async function handleSignUp(req: NextRequest, data: any) {
  const { name, email, password, isNistian, nistEmail, roll } = data;
  console.log("TEST: controller data:", data);

  try {
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
          { message: "User with this email already exists.", success: false },
          { status: 400 }
        );
      }
      if (isNistian && existingUser.nistEmail === nistEmail) {
        return NextResponse.json(
          { message: "NIST email already in use.", success: false },
          { status: 400 }
        );
      }
      if (isNistian && existingUser.roll === roll) {
        return NextResponse.json(
          { message: "Roll number already in use." , success: false },
          { status: 400 }
        );
      }
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    await prisma.user.create({
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
      { message: "User created successfully", success: true },
      { status: 201 }
    );
  }
  catch (ex) {
    console.log("\nExceptions of Handle Signup:\n", `${ex}`);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
