"use client";

import { ChatComponent } from "@/components/chat-component";
import { CheckEnv } from "@/components/check-env";
import { checkEnv } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Chat() {
  const [error, setError] = useState<any>();

  useEffect(() => {
    const checkBrowser = async () => {
      try {
        await checkEnv();
      } catch (e) {
        console.log(e);
        if (e instanceof Error) setError(e?.message);
      }
    };
    checkBrowser();
  }, []);

  return (
    <div>
      {error && <CheckEnv error={error} />}
      <ChatComponent error={error} />
    </div>
  );
}
