import Link from "next/link";
import React from "react";

export const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={href} className="underline hover:opacity-70">
      {children}
    </Link>
  );
};
