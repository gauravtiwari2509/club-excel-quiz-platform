import { z } from "zod";

const startQuizSchema = z.object({
  quizId: z.string().uuid(),
});

const updateQuizSchema = z.object({
  quizId: z.string().uuid(),
  quizAttemptId: z.string().uuid(),
  finishedAt: z
    .string()
    .refine((val) => !isNaN(Date.parse(val)), {
      message: "Invalid end time",
    })
    .transform((val) => new Date(val))
    .optional(),

  isPlagiarism: z.boolean(),
  status: z.enum(["SUBMITTED", "CANCELLED"]),
  answers: z.array(
    z.object({
      questionId: z.string().uuid(),
      selectedOptionId: z.string().uuid(),
    })
  ),
});
export type updateQuizSchemaType = z.infer<typeof updateQuizSchema>;
export { startQuizSchema, updateQuizSchema };
