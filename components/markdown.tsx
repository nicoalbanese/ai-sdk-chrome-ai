import React from "react";
import ReactMarkdown from "react-markdown";

interface MemoizedReactMarkdownProps {
  children: React.ReactNode;
  className?: string;
}

export const MemoizedReactMarkdown: React.FC<MemoizedReactMarkdownProps> = React.memo(
  ({ children, className }) => {
    const content = Array.isArray(children)
      ? children
        .map((child, index) => {
          if (typeof child === "object" && child !== null && "content" in child) {
            return child.content;
          } else {
            return String(child);
          }
        })
        .join(" ")
      : String(children);

    return <ReactMarkdown className={className}>{content}</ReactMarkdown>;
  },
  (prevProps, nextProps) =>
    prevProps.children === nextProps.children &&
    prevProps.className === nextProps.className
);

MemoizedReactMarkdown.displayName = "MemoizedReactMarkdown";
