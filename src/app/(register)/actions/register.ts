"use server";

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
    terms: formData.get("terms") === "on",
  });

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, lastname, email, terms } = parsed.data;
  console.log("Parsed form data:", parsed.data);

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return {
      errors: {
        email: "This email is already registered",
      },
    };
  }

  await prisma.user.create({
    data: {
      name: name,
      lastName: lastname,
      email: email,
      terms: terms,
    },
  });

  return { success: true };
}
