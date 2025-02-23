import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import prisma from "@/lib/prisma/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function handleCreateQuestion(req: NextRequest, data: any) {
  const { quizId, questionText, topicName, options } = data;

  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { role: userRole } = session?.user || {};

  if (userRole !== "ADMIN") {
    return NextResponse.json(
      { message: "Only admin is permitted to add questions" },
      { status: 403 }
    );
  }

  try {
    // we can also check more than one option shouldn't be correct but it's okay it helps in making multiple answer correct wala problem
    const hasCorrectOption = options.some(
      (option: { isCorrect: boolean }) => option.isCorrect
    );

    if (!hasCorrectOption) {
      return NextResponse.json(
        { message: "At least one option must be marked as correct" },
        { status: 400 }
      );
    }

    await prisma.$transaction(async (prisma) => {
      const existingTopic = await prisma.topic.upsert({
        where: { name: topicName },
        update: {},
        create: { name: topicName },
      });

      const question = await prisma.question.create({
        data: {
          quizId,
          questionText,
          topicName: existingTopic.name,
          options: {
            create: options.map(
              (option: { optionText: string; isCorrect: boolean }) => ({
                optionText: option.optionText,
                isCorrect: option.isCorrect,
              })
            ),
          },
        },
      });

      return question;
    });

    return NextResponse.json(
      {
        message: "Question added successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating question:", error);
    return NextResponse.json(
      { message: "Failed to add question to quiz" },
      { status: 500 }
    );
  }
}

export async function handleDeleteQuestion({
  questionId,
}: {
  questionId: string;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { role: userRole } = session?.user || {};

  if (userRole !== "ADMIN") {
    return NextResponse.json(
      { message: "Only admin is permitted to delete questions" },
      { status: 403 }
    );
  }

  try {
    const question = await prisma.question.findUnique({
      where: { id: questionId },
    });

    if (!question) {
      return NextResponse.json(
        { message: "Question not found" },
        { status: 404 }
      );
    }

    await prisma.question.delete({
      where: { id: questionId },
    });

    return NextResponse.json(
      {
        message: "Question deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting question:", error);
    return NextResponse.json(
      { message: "Failed to delete question" },
      { status: 500 }
    );
  }
}
