import { FC } from "react";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Label } from "@/shared/components/ui/label";

interface InputCheckboxProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const InputCheckbox: FC<InputCheckboxProps> = ({ children, ...props }) => {
  return (
    <fieldset className="flex items-center space-x-3">
      <Checkbox
        className="size-5 border border-white checked:border-white/70 checked:bg-white/70 hover:bg-white/10 transition-colors"
        {...props}
      />
      <Label htmlFor="terms" className="text-sm leading-none select-none">
        {children}
      </Label>
    </fieldset>
  );
};

export default InputCheckbox;
