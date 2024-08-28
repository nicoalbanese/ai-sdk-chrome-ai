import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function checkEnv() {
  function getChromeVersion() {
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    return raw ? parseInt(raw[2], 10) : 0;
  }
  // @ts-expect-error
  if (navigator.userAgentData?.brands) {
    // @ts-expect-error
    const isChrome = navigator.userAgentData?.brands.some(
      // @ts-expect-error
      (brandInfo) => brandInfo.brand === "Google Chrome",
    );

    if (!isChrome) {
      throw new Error(
        "Your browser is not supported. Please use Google Chrome Dev or Canary.",
      );
    }
  } else {
    // If brands is not available, we can't determine the browser, so we should handle this case
    throw new Error(
      "Your browser is not supported. Please use Google Chrome Dev or Canary.",
    );
  }

  const version = getChromeVersion();
  if (version < 127) {
    throw new Error(
      "Your browser is not supported. Please update to 127 version or greater.",
    );
  }

  if (!("ai" in globalThis)) {
    throw new Error(
      "Prompt API is not available, check your configuration in chrome://flags/#prompt-api-for-gemini-nano",
    );
  }

  const state = await ai?.assistant.capabilities();
  if (state.available !== "readily") {
    throw new Error(
      "Built-in AI is not ready, check your configuration in chrome://flags/#optimization-guide-on-device-model",
    );
  }
}
