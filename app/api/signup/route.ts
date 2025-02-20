import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import { signUpSchema } from "@/zodSchemas/SignupSchema";

const SALT_ROUNDS = 10;
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: "okay working fine" });
}
export async function POST(req: NextRequest) {
  console.log("requesto arrives");
  try {
    const { data }: { data: any } = await req.json();
    console.log(data);
    const parsedData = signUpSchema.safeParse(data);

    if (!parsedData.success) {
      return NextResponse.json(
        { errors: parsedData.error.errors },
        { status: 400 }
      );
    }
    console.log(parsedData.data);
    const { name, email, password, isNistian, nistEmail, roll } =
      parsedData.data;

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

    if (newUser) {
      return NextResponse.json(
        { message: "User created successfully" },
        { status: 201 }
      );
    } else {
      return NextResponse.json(
        { message: "Failed to create user." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
