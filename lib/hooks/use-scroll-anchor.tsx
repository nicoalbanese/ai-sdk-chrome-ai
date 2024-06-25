import { useCallback, useEffect, useRef, useState } from "react";
import { useEventListener } from "usehooks-ts";

const getBehavior = () =>
  document.body.scrollHeight - window.innerHeight - window.scrollY < 100
    ? "instant"
    : "smooth";

export const useScrollAnchor = () => {
  const messagesRef = useRef<HTMLDivElement>(null);
  // A ref to the element that, if the visibility ref is intersecting, we consider it to NOT be visible
  const inputRef = useRef<HTMLDivElement>(null);
  const lastScrollRef = useRef(0);
  const [scrolling, setScrolling] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const scrollToBottom = useCallback(() => {
    setIsAtBottom(true);
    if (messagesRef.current) {
      setScrolling(true);
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: getBehavior(),
      });
      setTimeout(() => setScrolling(false), 750);
    }
  }, []);

  useEffect(() => {
    if (!messagesRef.current) return;
    const observer = new ResizeObserver(() => {
      const behavior = getBehavior();
      if (isAtBottom && (!scrolling || behavior === "instant")) {
        window.scrollTo({
          top: document.body.scrollHeight,
          left: 0,
          behavior: getBehavior(),
        });
      }
    });
    observer.observe(messagesRef.current);
    return () => observer.disconnect();
  });

  useEventListener("scroll", () => {
    if (window.scrollY < lastScrollRef.current) setIsAtBottom(false);
    lastScrollRef.current = window.scrollY;
  });

  return {
    messagesRef,
    inputRef,
    scrollToBottom,
  };
};
