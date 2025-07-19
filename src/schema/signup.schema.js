import { z } from "zod";

const passwordValidation =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const SignupSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: "First name must be at least 3 characters" })
    .max(100, { message: "First name cannot be more than 100 characters" }),

  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(100, { message: "Last name cannot be more than 100 characters" })
    .optional(),

  email: z.string().email({ message: "Invalid email address" }),

  password: z.string().regex(passwordValidation, {
    message:
      "Password must be at least 8 characters, include one uppercase letter, one lowercase letter, one number, and one special character.",
  }),
});
