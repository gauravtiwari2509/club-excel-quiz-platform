
import { signUpSchema } from "@/zodSchemas/SignupSchema";
import { withValidation } from "@/lib/validator/validateInput";
import { handleSignUp } from "@/controllers/auth/authControllers";

export const POST = withValidation(signUpSchema, handleSignUp);