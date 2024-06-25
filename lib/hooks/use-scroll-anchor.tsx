import { useCallback, useEffect, useRef, useState } from "react";
import { useEventListener } from "usehooks-ts";

export const useScrollAnchor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const lastScrollRef = useRef(0);
  const targetScrollHeightRef = useRef(0);
  const [hasNotScrolled, setHasNotScrolled] = useState(false);

  const isAtBottom = useCallback((scrollHeight: number) => {
    const container = containerRef.current;
    if (!container) return "instant";
    return scrollHeight - (container.scrollTop + container.clientHeight) < 100;
  }, []);

  const scrollToBottom = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    setHasNotScrolled(true);
    targetScrollHeightRef.current = container.scrollHeight;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: isAtBottom(container.scrollHeight) ? "instant" : "smooth",
    });
  }, [isAtBottom]);

  useEffect(() => {
    const container = containerRef.current;
    const messages = messagesRef.current;
    if (!container || !messages) return;

    const observer = new ResizeObserver(() => {
      const atBottom = isAtBottom(targetScrollHeightRef.current);
      if (hasNotScrolled && atBottom) {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: "instant",
        });
      }
    });
    observer.observe(messages);
    return () => observer.disconnect();
  }, [isAtBottom, hasNotScrolled]);

  useEventListener(
    "scroll",
    () => {
      const container = containerRef.current;
      if (!container) return;

      if (container.scrollTop < lastScrollRef.current) setHasNotScrolled(false);
      lastScrollRef.current = container.scrollTop;
    },
    containerRef,
  );

  return {
    messagesRef,
    containerRef,
    scrollToBottom,
  };
};
