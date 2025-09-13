import { refine, z } from "zod";
import { validateCedula } from "./utils";

export const RegisterFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must be at most 50 characters long")
    .refine(
      (value) => {
        if (/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) {
          return true;
        }
      },
      {
        message: "Name can only contain letters and spaces",
      }
    )
    .trim(),
  lastname: z
    .string()
    .min(2, "Last name must be at least 2 characters long")
    .max(50, "Last name must be at most 50 characters long")
    .refine(
      (value) => {
        if (/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) {
          return true;
        }
      },
      {
        message: "Last name can only contain letters and spaces",
      }
    )
    .trim(),
  email: z.email("Please enter a valid email address").trim(),
  telephone: z
    .string()
    .min(9, "Telephone must be at least 9 characters long")
    .max(13, "Telephone must be at most 13 characters long")
    .optional()
    .or(z.literal("")),
  // dni: z
  //   .string()
  //   .min(10, "The DNI must have 10 digits")
  //   .max(10, "The DNI must have 10 digits")
  //   .refine((value) => validateCedula(value), {
  //     message:
  //       "The entered ID is not valid according to the verification algorithm.",
  //   }),
});

export type RegisterSchema = z.infer<typeof RegisterFormSchema>;
