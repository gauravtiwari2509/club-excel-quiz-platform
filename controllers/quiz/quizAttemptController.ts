import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import prisma from "@/lib/prisma/prisma";
import { updateQuizSchemaType } from "@/zodSchemas/QuizAttemptSchema";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function handleStartQuizAttempt(
  req: NextRequest,
  { quizId }: { quizId: string }
) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id: userId } = session.user || {};
  try {
    const quiz = await prisma.quiz.findUnique({
      where: {
        id: quizId,
      },
    });

    if (!quiz) {
      return NextResponse.json({ message: "No quiz found" }, { status: 404 });
    }

    if (quiz.isPublished === false) {
      return NextResponse.json(
        { message: "Quiz not published, not allowed to start" },
        { status: 403 }
      );
    }

    const currentDate = new Date();
    if (quiz.endTime <= currentDate) {
      return NextResponse.json(
        { message: "Time's up, not allowed to start" },
        { status: 400 }
      );
    }

    const newQuizAttempt = await prisma.quizAttempt.create({
      data: {
        quizId,
        userId,
        startedAt: new Date(),
        status: "IN_PROGRESS",
      },
    });

    return NextResponse.json(
      { message: "Quiz started successfully", data: newQuizAttempt },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating quiz attempt:", error);
    return NextResponse.json(
      { message: "Failed to create quiz attempt" },
      { status: 500 }
    );
  }
}

export async function handleFinalQuizSubmission(
  req: NextRequest,
  data: updateQuizSchemaType
) {
  console.log(data);
  const { quizAttemptId, quizId, status, finishedAt, isPlagiarism, answers } =
    data;
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { id: userId } = session.user || {};
  try {
    const quizAttempt = await prisma.quizAttempt.findUnique({
      where: { id: quizAttemptId },
      include: {
        quiz: {
          include: {
            questions: {
              include: {
                options: true,
              },
            },
          },
        },
      },
    });

    if (!quizAttempt) {
      return NextResponse.json(
        { message: "Quiz hasn't started" },
        { status: 404 }
      );
    }

    if (quizAttempt.userId !== userId) {
      return NextResponse.json(
        { message: "You cannot submit this quiz attempt" },
        { status: 403 }
      );
    }

    if (quizAttempt.quizId !== quizId) {
      return NextResponse.json(
        { message: "Quiz ID mismatch" },
        { status: 400 }
      );
    }

    if (
      quizAttempt.status === "SUBMITTED" ||
      quizAttempt.status === "CANCELLED"
    ) {
      return NextResponse.json(
        { message: "Quiz attempt already submitted or canceled" },
        { status: 400 }
      );
    }

    let score = 0;
    const answerData = [];

    for (const answer of answers) {
      const question = quizAttempt.quiz.questions.find(
        (q) => q.id === answer.questionId
      );

      if (!question) {
        return NextResponse.json(
          { message: `Question ${answer.questionId} not found in this quiz` },
          { status: 404 }
        );
      }

      const correctOption = question.options.find(
        (option) => option.isCorrect === true
      );
      if (!correctOption) {
        throw new Error(`No correct option for question ${answer.questionId}`);
      }

      const isCorrect = correctOption.id === answer.selectedOptionId;
      if (isCorrect) {
        score += 1;
      }

      answerData.push({
        quizAttemptId,
        questionId: answer.questionId,
        selectedOptionId: answer.selectedOptionId,
      });
    }

    await prisma.answer.createMany({
      data: answerData,
    });

    const updatedQuizAttempt = await prisma.quizAttempt.update({
      where: { id: quizAttemptId },
      data: {
        score,
        finishedAt: finishedAt || new Date(),
        status,
        isPlagiarism,
      },
    });

    return NextResponse.json(
      { message: "Quiz submitted successfully", data: updatedQuizAttempt },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error finalizing quiz attempt:", error);
    return NextResponse.json(
      { message: "Failed to finalize quiz attempt" },
      { status: 500 }
    );
  }
}
