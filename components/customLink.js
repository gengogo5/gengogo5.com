import React from "react";
import Link from "next/link";

const CustomLink = ({
  children,
  href
}) => 
  href.startsWith('/') || href === '' ? (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );

export default CustomLink;
