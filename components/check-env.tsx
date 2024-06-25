"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YROtjbTpHPA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FlagAccordion } from "./flag-table";
import { IncompatibleBrowserAlert } from "./incompatible-alert";

export function CheckEnv({ error }: { error: any }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="h-full sm:h-fit flex flex-col items-center justify-start sm:justify-center gap-4 sm:rounded-lg bg-white p-8 max-w-2xl overflow-y-scroll">
        <h2 className="text-3xl font-bold">Chrome AI Chatbot</h2>
        <p className="">
          This chatbot demo uses Next.js and Vercel AI SDK with the `chrome-ai`
          provider to call Chrome&apos;s{" "}
          <Link
            className="hover:underline text-neutral-900"
            href="https://developer.chrome.com/docs/ai/built-in"
          >
            built-in AI
          </Link>{" "}
          model (Gemini Nano).
        </p>
        <p>
          Gemini Nano&apos;s Prompt API is exposed on the browser&apos;s
          `window.ai` function. It can be easily called with Vercel AI
          SDK&apos;s unified API.
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
