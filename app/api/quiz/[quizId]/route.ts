import { NextRequest, NextResponse } from "next/server";
import { handleDeleteQuiz } from "@/controllers/quiz/quizControllers";
import { getAndDeleteQuizSchema } from "@/zodSchemas/QuizSchema";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ quizId: string }> }
) {
  const quizId = (await params).quizId;
  const parsed = getAndDeleteQuizSchema.safeParse({ quizId });
  console.log(parsed);
  if (!parsed.success) {
    return NextResponse.json({ errors: parsed.error.errors }, { status: 400 });
  }
  return handleDeleteQuiz(req, parsed.data);
}
// export async function GET(
//   req: NextRequest,
//   { params }: { params: Promise<{ quizId: string }> }
// ) {
//   const quizId = (await params).quizId;
//   const parsed = getAndDeleteQuizSchema.safeParse({ quizId });
//   console.log(parsed);
//   if (!parsed.success) {
//     return NextResponse.json({ errors: parsed.error.errors }, { status: 400 });
//   }
//   // will add controller here to get all the questions or can be done into quiestion route
// }
