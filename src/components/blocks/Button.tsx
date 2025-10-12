import Link from "next/link";
import React from "react";

const Button = ({ to, text }: { to: string; text: string }) => {
  return <Link href={to}>{text}</Link>;
};

export default Button;
