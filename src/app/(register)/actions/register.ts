import { prisma } from "@/lib/prisma";
import { RegisterFormSchema } from "../lib/definitions";

export async function register(formData: FormData): Promise<{
  success?: boolean;
  message?: string;
  errors?: Record<string, string | string[] | undefined>;
}> {
  const parsed = RegisterFormSchema.safeParse({
    name: formData.get("name"),
    lastname: formData.get("lastname"),
    email: formData.get("email"),
    telephone: formData.get("telephone"),
  });

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, lastname, email, telephone } = parsed.data;

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return {
      errors: {
        email: "Este correo electrónico ya está registrado",
      },
    };
  }

  await prisma.user.create({
    data: {
      name: name,
      lastName: lastname,
      email: email,
      telephone: telephone || null,
    },
  });

  return { success: true };
}
