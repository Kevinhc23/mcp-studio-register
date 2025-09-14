"use client";

import dynamic from "next/dynamic";
// import Plasma from "@/shared/components/ui/plasma";
import { FC } from "react";

interface HeaderBackgroundProps {
  children?: React.ReactNode;
}

const HeaderBackground: FC<HeaderBackgroundProps> = ({ children }) => {
  return (
    <section className="w-full min-h-dvh relative bg-black lg:overflow-hidden">
      <div
        className="absolute inset-0 z-0 pointer-events-none h-full bg-gradient-to-bl from-black to-neutral-900"
        style={{
          backgroundImage: 'url("/bg.avif")',
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-start py-8 px-4 md:justify-center md:min-h-dvh">
        <div className="w-full max-w-7xl mx-auto">{children}</div>
      </div>
    </section>
  );
};

HeaderBackground.displayName = "HeaderRegisterComponent";

export default HeaderBackground;
