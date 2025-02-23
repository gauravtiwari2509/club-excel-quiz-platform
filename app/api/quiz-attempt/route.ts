import {
  handleFinalQuizSubmission,
  handleStartQuizAttempt,
} from "@/controllers/quiz/quizAttemptController";
import { withValidation } from "@/lib/validator/validateInput";
import {
  startQuizSchema,
  updateQuizSchema,
} from "@/zodSchemas/QuizAttemptSchema";

export const POST = withValidation(startQuizSchema, handleStartQuizAttempt);
export const PUT = withValidation(updateQuizSchema, handleFinalQuizSubmission);
