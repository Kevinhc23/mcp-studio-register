import React, { FC } from "react";

const Spinner: FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative inline-block text-[28px] w-[1em] h-[1em]">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute left-[0.4629em] bottom-0 w-[0.074em] h-[0.2777em] rounded-[0.0555em] animate-spinner-fade"
            style={{
              transform: `rotate(${i * 30}deg)`,
              animationDelay: `${i * 0.083}s`,
              transformOrigin: "center -0.2222em",
            }}
          />
        ))}
      </div>
    </div>
  );
};

Spinner.displayName = "SpinnerComponent";

export default Spinner;
