import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

export async function handleCreateQuiz(req: NextRequest, data: any) {
  try {
    const { title, description, categoryName, startTime, endTime } = data;

    let category = await prisma.category.findUnique({
      where: {
        name: categoryName,
      },
    });
    // change this as per need ... we can throw error if category is not there
    if (!category) {
      category = await prisma.category.create({
        data: {
          name: categoryName,
        },
      });
    }

    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        {
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const { id: userId, role: userRole } = session?.user || {};

    if (userRole !== "ADMIN") {
      return NextResponse.json(
        { message: "Only admins can create quizzes" },
        { status: 403 }
      );
    }

    const newQuiz = await prisma.quiz.create({
      data: {
        title,
        description,
        categoryName,
        startTime,
        endTime,
        userId,
      },
    });

    return NextResponse.json(
      { message: "Quiz created successfully", quiz: newQuiz },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating quiz:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
