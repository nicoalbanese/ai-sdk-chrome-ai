import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Error = { title: string; description: string };

export function IncompatibleBrowserAlert({ error }: { error: string }) {
  const userAgent = navigator.userAgent;
  const isChrome = userAgent.toLowerCase().includes("chrome");
  const possibleErrors: {
    error: string;
    type: "browser" | "version" | "flag";
    title: string;
    additionalNote?: string;
  }[] = [
    {
      error:
        "Built-in AI is not ready, check your configuration in chrome://flags/#optimization-guide-on-device-model",
      type: "flag",
      title: "Please Enable Flags",
      additionalNote:
        "Note: it can take some time before your browser has fully downloaded Gemini Nano.",
    },
    {
      error:
        "Your browser is not supported. Please update to 127 version or greater.",
      type: isChrome ? "version" : "browser",
      title: isChrome ? "Please Update Chrome" : "Please Switch to Chrome",
      additionalNote: "Currently, only Chrome Dev & Canary are supported.",
    },
    {
      error:
        "Prompt API is not available, check your configuration in chrome://flags/#prompt-api-for-gemini-nano",
      type: "flag",
      title: "Please Enable Flags",
    },
  ];

  const currentError = possibleErrors.filter((e) => e.error === error)[0] ?? {
    error: "",
    title: "please try again",
  };

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error: {currentError.title}</AlertTitle>
      <AlertDescription>
        <p>{currentError.error}</p>
        {currentError.additionalNote ? (
          <p>{currentError.additionalNote}</p>
        ) : null}
      </AlertDescription>
    </Alert>
  );
}
