import { FC, InputHTMLAttributes } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface InputLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  htmlFor: string;
  error?: {
    message: string;
    isError: boolean;
  };
  hint?: string;
  optional?: boolean;
}

const InputLabel: FC<InputLabelProps> = ({
  label,
  htmlFor,
  optional,
  error,
  hint,
  ...props
}) => {
  return (
    <fieldset className="flex flex-col gap-2 w-full">
      <Label htmlFor={htmlFor} className="text-white">
        {label}
      </Label>
      {optional && <span className="text-sm text-gray-500">(Optional)</span>}
      <Input
        className="text-white"
        id={htmlFor}
        name={htmlFor}
        required={!optional}
        {...props}
      />
      {error ? (
        <span className="text-red-500 text-sm">{error.message}</span>
      ) : hint ? (
        <span className="text-neutral-400 text-sm">{hint}</span>
      ) : null}
    </fieldset>
  );
};

InputLabel.displayName = "InputLabelComponent";

export default InputLabel;
