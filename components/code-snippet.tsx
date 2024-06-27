export const CodeSnippet = ({ children }: { children: string }) => {
  return (
    <span className="text-sm mx-1 bg-secondary text-secondary-foreground p-1 rounded-md font-mono">
      {children}
    </span>
  );
};
