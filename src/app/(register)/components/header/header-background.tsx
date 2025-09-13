"use client";

import Plasma from "@/shared/components/ui/plasma";
import { FC } from "react";

interface HeaderBackgroundProps {
  children?: React.ReactNode;
}

const HeaderBackground: FC<HeaderBackgroundProps> = ({ children }) => {
  return (
    <section className="w-full h-dvh relative bg-black">
      <Plasma
        color="#c1c1c1"
        speed={0.6}
        direction="forward"
        scale={1.1}
        opacity={0.8}
        mouseInteractive={false}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {children}
      </div>
    </section>
  );
};

HeaderBackground.displayName = "HeaderRegisterComponent";

export default HeaderBackground;
