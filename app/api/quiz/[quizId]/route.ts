import { NextRequest, NextResponse } from "next/server";
import {
  getAllQuizQuestion,
  handleDeleteQuiz,
} from "@/controllers/quiz/quizControllers";
import { getAndDeleteQuizSchema } from "@/zodSchemas/QuizSchema";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ quizId: string }> }
) {
  const quizId = (await params).quizId;

  const parsed = getAndDeleteQuizSchema.safeParse({ quizId });

  if (!parsed.success) {
    return NextResponse.json({ errors: parsed.error.errors }, { status: 400 });
  }
  return handleDeleteQuiz(req, parsed.data);
}
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ quizId: string }> }
) {
  const quizId = (await params).quizId;

  const parsed = getAndDeleteQuizSchema.safeParse({ quizId });

  if (!parsed.success) {
    return NextResponse.json({ errors: parsed.error.errors }, { status: 400 });
  }
  return getAllQuizQuestion(req, parsed.data);
}
