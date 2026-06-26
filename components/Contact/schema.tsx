import { z } from "zod";

export const schema = z.object({
  email: z.string().email({ message: "Enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "At least 5 characters." })
    .max(100, { message: "Keep it under 100 characters." }),
  message: z
    .string()
    .min(10, { message: "At least 10 characters." })
    .max(1000, { message: "Keep it under 1000 characters." }),
});
