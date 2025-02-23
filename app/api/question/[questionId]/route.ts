import { NextRequest, NextResponse } from "next/server";
import { handleDeleteQuestion } from "@/controllers/question/questionController";
import { DeleteQuestionSchema } from "@/zodSchemas/QuestionSchema";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ questionId: string }> }
) {
  const questionId = (await params).questionId;

  const parsed = DeleteQuestionSchema.safeParse({ questionId });

  if (!parsed.success) {
    return NextResponse.json({ errors: parsed.error.errors }, { status: 400 });
  }
  return handleDeleteQuestion(parsed.data);
}
