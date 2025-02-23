import { z } from "zod";

const optionSchema = z.object({
  optionText: z.string().min(1),
  isCorrect: z.boolean(),
});

const createQuestionSchema = z.object({
  quizId: z.string().uuid(),
  questionText: z.string().min(1),
  topicName: z.string().min(1),
  options: z
    .array(optionSchema)
    .min(2, "question must have at least 2 options"),
});

export { createQuestionSchema };
