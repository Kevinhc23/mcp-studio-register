import React from "react";

interface SpinnerLoadingProps {
  size?: number;
  color?: string;
  className?: string;
}

export const SpinnerLoading = ({
  size = 48,
  color = "blue-600",
  className = "",
}: SpinnerLoadingProps) => {
  const barWidth = Math.max(2, size * 0.08);
  const barHeight = size * 0.35; // Palitos más largos (35% vs 25%)
  const radius = size * 0.3; // Radio más compacto

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className={`absolute bg-${color} rounded-full`}
          style={{
            width: barWidth,
            height: barHeight,
            left: "50%",
            top: "50%",
            transformOrigin: `0px ${radius}px`,
            transform: `translate(-50%, -50%) rotate(${
              i * 30
            }deg) translateY(-${radius}px)`,
            animation: `spinnerFade 1s linear infinite`,
            animationDelay: `${i * 0.083}s`,
          }}
        />
      ))}
      <style jsx>{`
        @keyframes spinnerFade {
          0%,
          39%,
          100% {
            opacity: 0.25;
          }
          40% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
