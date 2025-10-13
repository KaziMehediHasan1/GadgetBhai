import React from "react";

const Button = ({ text, style }: { text: string; style: string }) => {
  return <button className={style}>{text}</button>;
};

export default Button;
