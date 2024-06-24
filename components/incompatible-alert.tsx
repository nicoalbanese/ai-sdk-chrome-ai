import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function IncompatibleBrowserAlert() {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error: Your Browser is Unsupported</AlertTitle>
      <AlertDescription>
        Please use a supported browser and enable the required experimental
        flags. This banner will disappear once you are set up.
      </AlertDescription>
    </Alert>
  );
}
