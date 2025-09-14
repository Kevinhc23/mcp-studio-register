"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import InputLabel from "@/shared/components/inputs/input-label";
import { zodResolver } from "@hookform/resolvers/zod";
import { register as registerAction } from "@/app/actions/register";
import { Button } from "@/shared/components/ui/button";
import InputCheckbox from "@/shared/components/inputs/input-checkbox";
import { RegisterFormSchema, RegisterSchema } from "@/app/lib/definitions";

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(RegisterFormSchema),
    mode: "onChange",
  });

  const disableButton = Object.keys(errors).length > 0;

  const onSubmit = async (data: RegisterSchema) => {
    setIsSubmitting(true);
    setSubmitMessage("");
    console.log("Form data to be submitted:", data);

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("lastname", data.lastname);
    formData.append("email", data.email);
    formData.append("terms", data.terms ? "on" : "off");

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

      if (result?.success) {
        toast.success("Registration successful! We'll be in touch soon.");
      }

      console.log("Result from register action:", result);

      if (result?.errors?.email) toast.error(result.errors.email as string);
    } catch (err) {
      toast.error(err instanceof Error ? err.name : "An error occurred");
    } finally {
      setIsSubmitting(false);
      reset();
    }
  };

  return (
    <div className="px-6 py-12 backdrop-blur-md bg-black/20 rounded-lg shadow-md w-full border border-white/20 flex flex-col gap-2">
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

        <div className="mt-2 flex items-center space-x-3">
          <Controller
            control={control}
            name="terms"
            rules={{ required: true }}
            render={({ field }) => (
              <InputCheckbox
                id="terms"
                disabled={isSubmitting}
                className="size-5 border border-white checked:border-white/70 checked:bg-white/70 hover:bg-white/10 transition-colors"
                checked={!!field.value}
                onCheckedChange={(val: boolean | "indeterminate") =>
                  field.onChange(Boolean(val))
                }
              />
            )}
          />
          <label
            htmlFor="terms"
            className="text-sm text-white leading-none select-none"
          >
            I agree to receive communications about AI news, updates, and
            offers. I understand I can unsubscribe at any time.
          </label>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting || disableButton}
            className={`w-full bg-white text-black py-2 rounded-md font-semibold hover:bg-white/90 cursor-pointer transition-all 
            ${
              isSubmitting || disableButton
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            {isSubmitting ? "Registering..." : "Register Now"}
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
