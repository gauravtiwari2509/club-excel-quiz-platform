import { withValidation } from "@/lib/validator/validateInput";
import { handleCreateQuiz } from "@/controllers/quiz/quizControllers";
import { CreateQuizSchema } from "@/zodSchemas/CreateQuizSchema";

export const POST = withValidation(CreateQuizSchema, handleCreateQuiz);
