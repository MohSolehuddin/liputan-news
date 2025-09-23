import { z } from "zod";

const loginSchema = z.object({
  username: z
    .string()
    .nonempty("Please enter your username")
    .min(3, "Username must be at least 3 characters"),
  password: z
    .string()
    .nonempty("Please enter your password")
    .min(8, "Password must be at least 8 characters long"),
});

type LoginSchema = z.infer<typeof loginSchema>;

export type { LoginSchema };
export default loginSchema;
