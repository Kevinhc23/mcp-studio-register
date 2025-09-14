import {
  Anthropic,
  ModelContextProtocol,
  Cohere,
  Grok,
  OpenAI,
  Gemini,
  DeepSeek,
  ClaudeAI,
  Ollama,
} from "@/shared/assets/icons";
import { Marquee, MarqueeContent } from "@/shared/components/ui/marquee";
import Link from "next/link";
import { FC } from "react";
import HeaderBackground from "@/app/components/header/header-background";
import RegisterForm from "@/app/components/form/register-form";

const logos = [
  {
    name: "OpenAI",
    component: OpenAI,
    href: "https://openai.com/",
  },
  {
    name: "Gemini",
    component: Gemini,
    href: "https://gemini.google/",
  },
  {
    name: "ClaudeAI",
    component: ClaudeAI,
    href: "https://claude.ai/",
  },
  {
    name: "Ollama",
    component: Ollama,
    href: "https://ollama.com/",
  },
  {
    name: "DeepSeek",
    component: DeepSeek,
    href: "https://deepseek.ai/",
  },
  {
    name: "Anthropic",
    component: Anthropic,
    href: "https://www.anthropic.com/",
  },
  {
    name: "Cohere",
    component: Cohere,
    href: "https://cohere.com/",
  },
  {
    name: "Grok",
    component: Grok,
    href: "https://grok.com/",
  },
];

const Header: FC = () => {
  return (
    <HeaderBackground>
      <div className="max-w-7xl flex flex-col md:flex-row justify-between gap-12 w-full items-center mx-auto py-12 h-full">
        <div className="flex flex-col gap-4 w-full md:w-1/2 rounded-lg">
          <span className="text-xs text-white tracking-widest px-2.5 py-1 shrink-0 truncate rounded-full font-bold w-fit border border-white/20">
            <ModelContextProtocol className="inline h-3 w-3 mr-2 -mt-1 fill-white" />
            MCP Creator Studio
          </span>
          <h1 className="text-3xl md:text-5xl text-white font-bold text-balance">
            Less code, more impact: Cloud-ready MCP apps in minutes
          </h1>
          <p className="text-base md:text-xl text-gray-100 text-balance mt-4">
            Sign up to start building, deploying, and scaling your applications
            quickly and easily with our MCP Creator Studio.
          </p>
          <div className="flex flex-col gap-6 mt-4">
            <h3 className="text-xl text-white font-extrabold text-balance">
              Trusted by leading AI platforms
            </h3>
            <Marquee>
              <MarqueeContent>
                {logos.map((logo) => (
                  <Link key={logo.name} href={logo.href} target="_blank">
                    <logo.component className="size-6 mx-6 fill-white opacity-50 hover:opacity-100 transition-opacity grayscale" />
                  </Link>
                ))}
              </MarqueeContent>
            </Marquee>
          </div>
        </div>
        <div className="w-full md:w-1/2 rounded-lg mt-6 md:mt-0">
          <RegisterForm />
        </div>
      </div>
    </HeaderBackground>
  );
};

export default Header;
