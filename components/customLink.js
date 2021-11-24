import React from "react";
import Link from "next/link";

// 内部リンクはLinkコンポーネントにする
// 外部リンクは別タブで開く
// #58 zenn-markdown-htmlのブログカード用のStyleを上書きしないようStyleは継承させる
const CustomLink = ({
  children,
  href,
  style
}) => 
  href.startsWith('/') || href === '' ? (
    <Link href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" style={style}>
      {children}
    </a>
  );

export default CustomLink;
