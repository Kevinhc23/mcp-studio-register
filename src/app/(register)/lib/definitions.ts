import { z } from "zod";
import { validateCedula } from "./utils";

export const RegisterFormSchema = z.object({
  name: z
    .string()
    .min(2, "Tu nombre debe tener como mínimo 2 caracteres")
    .max(50, "Tu nombre debe tener como máximo 50 caracteres"),
  lastname: z
    .string()
    .min(2, "Tu apellido debe tener como mínimo 2 caracteres")
    .max(50, "Tu apellido debe tener como máximo 50 caracteres"),
  email: z.email("Por favor, introduce un correo electrónico válido"),
  telephone: z
    .string()
    .min(9, "El teléfono debe tener como mínimo 9 caracteres")
    .max(13, "El teléfono debe tener como máximo 13 caracteres")
    .optional()
    .or(z.literal("")),
  dni: z
    .string()
    .min(10, "La cédula debe tener 10 dígitos")
    .max(10, "La cédula debe tener 10 dígitos")
    .refine((value) => validateCedula(value), {
      message:
        "La cédula ingresada no es válida según el algoritmo de verificación",
    }),
});

export type RegisterSchema = z.infer<typeof RegisterFormSchema>;
