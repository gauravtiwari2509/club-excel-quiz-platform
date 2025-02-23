import { z } from "zod";

export const signUpSchema = z
  .object({
    name: z.string(),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(5, "Password must be at least 5 characters.")
      .regex(/[a-z]/, "One lowercase letter must be required.")
      .regex(/[A-Z]/, "One uppercase letter must be required.")
      .regex(/[0-9]/, "One digit must be required.")
      .regex(/[^a-zA-Z0-9]/, "One special character must be required."),
    isNistian: z.boolean(),
    nistEmail: z
      .string()
      .regex(
        /^[a-zA-Z0-9._%+-]+@nist\.edu$/,
        "NIST email must end with @nist.edu"
      )
      .optional(),
    roll: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.isNistian) {
        return data.nistEmail !== undefined && data.roll !== undefined;
      }
      return true;
    },
    {
      message: "NIST email and roll number are required for Nistian users.",
      path: ["nistEmail", "roll"],
    }
  )
  .refine(
    (data) => {
      if (!data.isNistian) {
        return data.nistEmail === undefined && data.roll === undefined;
      }
      return true;
    },
    {
      message: "nist email and roll number not to be enter by a non nistian.",
      path: ["nistEmail", "roll"],
    }
  );

export type signUpParam = z.infer<typeof signUpSchema>;