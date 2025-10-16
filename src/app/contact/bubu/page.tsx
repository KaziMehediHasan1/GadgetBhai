"use client";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

function BUBU() {
  const pathename = useSearchParams();
  console.log(pathename, "dekhlam");
  return <div>{}</div>;
}

export default BUBU;
