import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Error = { title: string; description: string };

export function IncompatibleBrowserAlert({ error }: { error: string }) {
  const userAgent = navigator.userAgent;
  const possibleErrors: {
    error: string;
    type: "browser" | "version" | "flag";
    title: string;
  }[] = [
    {
      error:
        "Built-in AI is not ready, check your configuration in chrome://flags/#optimization-guide-on-device-model",
      type: "flag",
      title: "Please Enable Flags",
    },
    {
      error:
        "Your browser is not supported. Please update to 127 version or greater.",
      type: userAgent.includes("chrome") ? "version" : "browser",
      title: userAgent.includes("chrome")
        ? "Please Update Chrome"
        : "Please Switch to Chrome",
    },
    {
      error:
        "Prompt API is not available, check your configuration in chrome://flags/#prompt-api-for-gemini-nano",
      type: "flag",
      title: "Please Enable Flags",
    },
  ];

  const currentError = possibleErrors.filter((e) => e.error === error)[0];

  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error: {currentError.title}</AlertTitle>
      <AlertDescription>{currentError.error}</AlertDescription>
    </Alert>
  );
}
