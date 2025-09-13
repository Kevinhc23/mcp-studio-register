import InputLabel from "@/shared/components/inputs/InputLabel";

const RegisterForm = () => {
  



  return (
    <div className="p-6 backdrop-blur-md bg-black/20 rounded-lg shadow-md w-full border border-white/10">
      <h3 className="text-2xl font-bold text-white">
        Register for Early Access
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <InputLabel
          label="Cédula de Identidad"
          htmlFor="dni"
          type="text"
          placeholder="1234567890"
          disabled={isSubmitting}
          error={errors.dni?.message}
          required
          {...register("dni")}
        />

        <InputLabel

          label="Name"
          htmlFor="name"
          type="text"
          placeholder="Name"
          disabled={isSubmitting}
          error={errors.name?.message}
          hint="Enter your full name"
          {...register("name")}
        />

        <InputLabel
          label="Last Name"
          htmlFor="lastname"
          type="text"
          placeholder="Last Name"
          disabled={isSubmitting}
          error={errors.lastname?.message}
          {...register("lastname")}
        />
    </div>
  );
};

RegisterForm.displayName = "RegisterFormComponent";

export default RegisterForm;
