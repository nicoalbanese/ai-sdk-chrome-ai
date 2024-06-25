import Link from "next/link";

export const EmptyScreen = () => {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-semibold text-foreground">
        Next.js Chrome AI Chatbot
      </h1>
      <p className="leading-normal">
        This is an open source AI chatbot app template built with{" "}
        <Link className="underline hover:opacity-70" href="https://nextjs.org">
          Next.js
        </Link>
        , the Vercel{" "}
        <Link
          className="underline hover:opacity-70"
          href="https://sdk.vercel.ai"
        >
          AI SDK
        </Link>
        , and the{" "}
        <Link
          href="https://github.com/jeasonstudio/chrome-ai"
          className="underline hover:opacity-70"
        >
          chrome-ai
        </Link>{" "}
        provider.
      </p>
      <p className="leading-normal">
        It uses Google Chrome&apos;s built-in large language model, Gemini Nano.
      </p>
    </div>
  );
};
