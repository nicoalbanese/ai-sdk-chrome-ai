import Link from "next/link";
import { ExternalLink } from "./external-link";

export const EmptyScreen = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-semibold text-foreground">
        Next.js Chrome AI Chatbot
      </h1>
      <p className="leading-normal">
        This is an open source AI chatbot app template built with{" "}
        <ExternalLink href="https://nextjs.org">Next.js</ExternalLink>, the
        Vercel <ExternalLink href="https://sdk.vercel.ai">AI SDK</ExternalLink>,
        and the{" "}
        <ExternalLink href="https://github.com/jeasonstudio/chrome-ai">
          chrome-ai
        </ExternalLink>{" "}
        provider.
      </p>
      <p className="leading-normal">
        It uses Google Chrome&apos;s built-in large language model, Gemini Nano.
      </p>
    </div>
  );
};
