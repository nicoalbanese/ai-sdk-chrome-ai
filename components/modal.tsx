/**
 * v0 by Vercel.
 * @see https://v0.dev/t/YROtjbTpHPA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { FlagAccordion } from "./flag-table";
import { IncompatibleBrowserAlert } from "./incompatible-alert";
import { ExternalLink } from "./external-link";
import { useState } from "react";
import { XIcon } from "lucide-react";

export function Modal({
  error,
  closeModal,
}: {
  error?: any;
  closeModal: () => void;
}) {
  const [selectedAccordionValue, setSelectedSelectedAccordionValue] = useState<
    string | undefined
  >();
  const openInstructions = () => setSelectedSelectedAccordionValue("item-3");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {error ? null : (
        <button className="absolute right-4 top-4" onClick={closeModal}>
          <XIcon />
        </button>
      )}
      <div className="h-full sm:h-fit flex flex-col items-center justify-start sm:justify-center gap-4 sm:rounded-lg bg-white p-8 max-w-2xl overflow-y-scroll">
        <h2 className="text-3xl font-bold">Next.js Chrome AI Chatbot</h2>
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
          {error ? (
            <div>
              <IncompatibleBrowserAlert
                error={error}
                openInstructions={openInstructions}
              />
            </div>
          ) : null}
          <FlagAccordion
            value={selectedAccordionValue}
            setValue={setSelectedSelectedAccordionValue}
          />
        </div>
      </div>
    </div>
  );
}
