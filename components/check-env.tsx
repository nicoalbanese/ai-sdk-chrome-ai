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

export function CheckEnv() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-8 max-w-2xl">
        <h2 className="text-3xl font-bold">Chrome AI Chatbot</h2>
        <p>
          This chatbot demo uses Next.js and Vercel AI SDK with the `chrome-ai`
          provider to call Chrome's{" "}
          <Link href="https://developer.chrome.com/docs/ai/built-in">
            built-in AI
          </Link>{" "}
          model (Gemini Nano).
        </p>
        <p>
          Gemini Nano&apos;s Prompt API is exposed on the browser's `window.ai`
          function. It can be easily called with Vercel AI SDK&apos;s unified
          API.
        </p>
        <div className="w-full pt-2 space-y-2">
          <div>
            <IncompatibleBrowserAlert />
          </div>
          <FlagAccordion />
        </div>
      </div>
    </div>
  );
}
