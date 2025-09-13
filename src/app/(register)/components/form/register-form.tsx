"use client";

import InputLabel from "@/shared/components/inputs/input-label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  RegisterFormSchema,
  RegisterSchema,
} from "@/app/(register)/lib/definitions";
import { register as registerAction } from "@/app/(register)/actions/register";
import { Button } from "@/shared/components/ui/button";
import Spinner from "@/shared/components/ui/spinner";

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(RegisterFormSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: RegisterSchema) => {
    console.log("onSubmit called", data);
    setIsSubmitting(true);
    setSubmitMessage("");

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("lastname", data.lastname);
    formData.append("email", data.email);
    if (data.telephone) formData.append("telephone", data.telephone);

    try {
      const result = await registerAction(formData);

      if (result?.errors) {
        Object.entries(result.errors).forEach(([field, message]) => {
          const text = Array.isArray(message)
            ? message[0]
            : (message as string);
          setError(field as any, { type: "server", message: text });
        });
      }

      if (result?.message) {
        setSubmitMessage(
          typeof result.message === "string"
            ? result.message
            : JSON.stringify(result.message)
        );
      }
    } catch (err) {
      setSubmitMessage("Ha ocurrido un error al enviar el formulario.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="px-8 py-12 backdrop-blur-md bg-black/20 rounded-lg shadow-md w-full border border-white/10 flex flex-col gap-2">
      <h3 className="text-2xl font-bold text-white">
        Register for Early Access
      </h3>
      <p className="mt-2 text-sm text-white/80">
        Fill out the form below to secure your spot and be the first to know
        when we launch.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <InputLabel
          label="Name"
          htmlFor="name"
          type="text"
          placeholder="Name"
          hint="Enter a valid name"
          disabled={isSubmitting}
          error={
            errors.name
              ? { message: errors.name.message as string, isError: true }
              : undefined
          }
          {...register("name")}
        />

        <InputLabel
          label="Last Name"
          htmlFor="lastname"
          type="text"
          placeholder="Last Name"
          hint="Enter a valid last name"
          disabled={isSubmitting}
          error={
            errors.lastname
              ? { message: errors.lastname.message as string, isError: true }
              : undefined
          }
          {...register("lastname")}
        />

        <InputLabel
          label="Email"
          htmlFor="email"
          type="email"
          placeholder="Email"
          disabled={isSubmitting}
          hint="Enter a valid email address"
          error={
            errors.email
              ? { message: errors.email.message as string, isError: true }
              : undefined
          }
          {...register("email")}
        />

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black py-2 rounded-md font-semibold hover:bg-white/90 cursor-pointer transition-all"
          >
            {isSubmitting ? <Spinner /> : "Register to Early Access"}
          </Button>
        </div>

        {submitMessage && (
          <div className="text-sm mt-2 p-2 rounded bg-white/10 text-white">
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
};

RegisterForm.displayName = "RegisterFormComponent";

export default RegisterForm;
