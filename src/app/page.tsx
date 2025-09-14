import { Toaster } from "sonner";
import Header from "@/app/(register)/components/header/header";
import { WithContext, SoftwareApplication } from "schema-dts";

const schema: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MCP Creator Studio",
  description:
    "MCP Creator Studio is a comprehensive platform for discovering, sharing, and managing AI tools and resources. Join our community to stay updated with the latest in artificial intelligence.",
  applicationCategory: "WebApplication",
  url: "https://www.mcpcreatorstudio.com",
  sameAs: [
    "https://www.facebook.com/mcpcreatorstudio",
    "https://www.twitter.com/mcpcreatorstudio",
    "https://www.linkedin.com/company/mcpcreatorstudio",
    "https://www.instagram.com/mcpcreatorstudio",
    "https://www.youtube.com/@mcpcreatorstudio",
  ],
  keywords:
    "AI tools, artificial intelligence, machine learning, deep learning, AI resources, AI community, AI news, AI updates, AI offers, technology, innovation",
  creator: {
    "@type": "Organization",
    name: "MCP Creator Studio",
    url: "https://www.mcpcreatorstudio.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.mcpcreatorstudio.com/logo.png",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "MCP Creator Studio",
    url: "https://www.mcpcreatorstudio.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.mcpcreatorstudio.com/logo.png",
    },
  },
  operatingSystem: "All",
  featureList:
    "Discover AI tools, Share AI resources, Manage AI projects, Join AI community, Stay updated with AI news",
  screenshot: "https://www.mcpcreatorstudio.com/screenshot.png",
  applicationSubCategory: "AI Platform",
  headline: "Discover, Share, and Manage AI Tools and Resources",
  inLanguage: "en-US",
  license: "https://www.mcpcreatorstudio.com/terms",
  version: "1.0.0",
  datePublished: "2025-09-15",
  dateModified: "2025-09-15",
  isAccessibleForFree: true,
  accessibilityAPI: "ARIA",
  accessibilityControl: "fullKeyboardControl",
  accessibilityFeature: [
    "highContrast",
    "textToSpeech",
    "screenReader",
    "keyboardNavigation",
  ],
  accessibilityHazard: ["noFlashingHazards", "noMotionSimulation"],
};

export default function Home() {
  return (
    <>
      <Header />
      <Toaster duration={3500} position="bottom-right" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
