"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YROtjbTpHPA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { FlagAccordion } from "./flag-table";
import { IncompatibleBrowserAlert } from "./incompatible-alert";
import { ExternalLink } from "./external-link";

export function CheckEnv({ error }: { error: any }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="h-full sm:h-fit flex flex-col items-center justify-start sm:justify-center gap-4 sm:rounded-lg bg-white p-8 max-w-2xl overflow-y-scroll">
        <h2 className="text-3xl font-bold">Chrome AI Chatbot</h2>
        <p className="">
          This chatbot demo uses Next.js and Vercel AI SDK with the chrome-ai
          provider to call Chrome&apos;s{" "}
          <ExternalLink href="https://developer.chrome.com/docs/ai/built-in">
            built-in AI
          </ExternalLink>{" "}
          model (Gemini Nano).
        </p>
        <p>
          Gemini Nano&apos;s Prompt API is exposed on the browser&apos;s
          <span className="text-sm mx-1 bg-secondary text-secondary-foreground p-1 rounded-md font-mono">
            window.ai
          </span>
          function. It can be easily called with Vercel AI SDK&apos;s unified
          API.
        </p>
        <div className="w-full pt-2 space-y-2">
          <div>
            <IncompatibleBrowserAlert error={error} />
          </div>
          <FlagAccordion />
        </div>
      </div>
    </div>
  );
}
