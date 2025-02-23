import { withValidation } from "@/lib/validator/validateInput";
import {
  handleCreateQuiz,
  handleGetQuiz,
} from "@/controllers/quiz/quizControllers";
import { CreateQuizSchema } from "@/zodSchemas/QuizSchema";

export const POST = withValidation(CreateQuizSchema, handleCreateQuiz);

export const GET = handleGetQuiz;
