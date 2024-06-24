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
        setError(e);
      }
    };
    checkBrowser();
  }, []);

  return (
    <div className="">
      {error && <CheckEnv />}
      <ChatComponent error={error} />
    </div>
  );
}
