import Link from "next/link";
import React from "react";

interface FLProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  newTab?: boolean;
}

export default function FakeLink({
  href,
  children,
  className = "",
  onClick,
  newTab,
}: FLProps) {
  const classes = `inline cursor-pointer text-blue-500 hover:text-blue-900 ${className}`;
  return href ? (
    <Link href={href} passHref>
      <a target={newTab ? "_blank" : undefined} className={classes}>
        {children}
      </a>
    </Link>
  ) : (
    <p className={classes} onClick={onClick}>
      {children}
    </p>
  );
}
