import { useCallback, useEffect, useRef, useState } from "react";
import { useEventListener } from "usehooks-ts";

export const useScrollAnchor = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const lastScrollRef = useRef(0);
  const [scrolling, setScrolling] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const getBehavior = useCallback(() => {
    const container = containerRef.current;
    const messages = messagesRef.current;
    if (!container || !messages) return "instant";
    return container.scrollHeight -
      (messages.clientHeight + container.scrollTop) <
      100
      ? "instant"
      : "smooth";
  }, []);

  const scrollToBottom = useCallback(() => {
    const container = containerRef.current;
    const messages = messagesRef.current;
    setIsAtBottom(true);

    if (!container || !messages) return;

    setScrolling(true);
    container.scrollTo({
      top: container.scrollTop,
      left: 0,
      behavior: getBehavior(),
    });
    setTimeout(() => setScrolling(false), 750);
  }, [getBehavior]);

  useEffect(() => {
    const container = containerRef.current;
    const messages = messagesRef.current;

    if (!container || !messages) return;

    const observer = new ResizeObserver(() => {
      const behavior = getBehavior();
      if (isAtBottom && (!scrolling || behavior === "instant")) {
        container.scrollTo({
          top: messages.clientHeight,
          left: 0,
          behavior: getBehavior(),
        });
      }
    });
    observer.observe(messages);
    return () => observer.disconnect();
  }, [getBehavior, isAtBottom, scrolling]);

  useEventListener("scroll", () => {
    const container = containerRef.current;
    const messages = messagesRef.current;

    if (!container || !messages) return;

    if (container.scrollTop < lastScrollRef.current) setIsAtBottom(false);
    lastScrollRef.current = container.scrollTop;
  });

  return {
    messagesRef,
    containerRef,
    scrollToBottom,
  };
};
