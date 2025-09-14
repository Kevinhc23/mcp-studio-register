"use client";

import Plasma from "@/shared/components/ui/plasma";
import { FC } from "react";

interface HeaderBackgroundProps {
  children?: React.ReactNode;
}

const HeaderBackground: FC<HeaderBackgroundProps> = ({ children }) => {
  return (
    <section className="w-full min-h-dvh relative bg-black lg:overflow-hidden">
      {/* Plasma background - occupies full area and doesn't block interaction */}
      <div className="absolute inset-0 z-0 pointer-events-none h-full">
        <Plasma
          color="#c1c1c1"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={false}
        />
      </div>

      {/* Children container: non-absolute so section expands on mobile; top-aligned on mobile, centered on md+ */}
      <div className="relative z-10 flex flex-col items-center justify-start py-8 px-4 md:justify-center md:min-h-dvh">
        <div className="w-full max-w-7xl mx-auto">{children}</div>
      </div>
    </section>
  );
};

HeaderBackground.displayName = "HeaderRegisterComponent";

export default HeaderBackground;
