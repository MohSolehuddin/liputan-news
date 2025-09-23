import { z } from "zod";

const registerSchema = z.object({
  username: z
    .string()
    .nonempty("Username field cannot be empty")
    .min(3, "Username must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

type RegisterSchema = z.infer<typeof registerSchema>;

export type { RegisterSchema };
export default registerSchema;
