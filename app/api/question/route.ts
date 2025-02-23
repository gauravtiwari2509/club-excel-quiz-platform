import { handleCreateQuestion } from "@/controllers/question/questionController";
import { withValidation } from "@/lib/validator/validateInput";
import { createQuestionSchema } from "@/zodSchemas/QuestionSchema";

export const POST = withValidation(createQuestionSchema, handleCreateQuestion);
