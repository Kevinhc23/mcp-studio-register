import { FC } from "react";
import { Checkbox } from "@/shared/components/ui/checkbox";
import { Label } from "@/shared/components/ui/label";

interface InputCheckboxProps {
  id?: string;
  checked?: boolean;
  onCheckedChange?: (val: boolean | "indeterminate") => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const InputCheckbox: FC<InputCheckboxProps> = ({
  id,
  checked,
  onCheckedChange,
  disabled,
  className,
  children,
}) => {
  return (
    <fieldset className="flex items-center space-x-3">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className={className}
      />
      <Label htmlFor={id} className="text-sm leading-none select-none">
        {children}
      </Label>
    </fieldset>
  );
};

export default InputCheckbox;
