import { z } from "zod";

const CreateQuizSchema = z
  .object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
    description: z.string().optional(),
    categoryName: z.string(),
    //might be better way to validate this
    startTime: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid start time",
      })
      .transform((val) => new Date(val)),
    endTime: z
      .string()
      .refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid end time",
      })
      .transform((val) => new Date(val)),
  })
  .refine((data) => data.endTime > data.startTime, {
    message: "End time must be greater than start time",
    path: ["startTime", "endTime"],
  });

const getAndDeleteQuizSchema = z.object({
  quizId: z.string().uuid("Quiz ID must be a valid UUID"),
});

export { CreateQuizSchema, getAndDeleteQuizSchema };
