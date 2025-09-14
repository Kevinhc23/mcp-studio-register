import React, { FC } from "react";

type SpinnerProps = {
  /** Tamaño en unidades Tailwind (ej: 6 => w-6 h-6). Default: 6 */
  size?: number;
  /** Color opcional */
  colorClass?: string;
};

const Spinner: FC<SpinnerProps> = ({ size = 6, colorClass = "bg-white" }) => {
  const containerClass = `flex items-center justify-center w-${size} h-${size}`;

  return (
    <div className={containerClass}>
      <div className="relative w-full h-full">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`absolute left-1/2 top-1/2 w-[0.15em] h-[0.6em] rounded-[0.1em] ${colorClass} animate-spinner-fade`}
            style={{
              transform: `rotate(${i * 30}deg) translateY(-170%)`,
              transformOrigin: "center",
              animationDelay: `${i * 0.083}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

Spinner.displayName = "SpinnerComponent";

export default Spinner;
