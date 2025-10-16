"use client";
import CommonWrapper from "@/components/CommonWrapper";
import BreadCurmb from "@/components/ui/BreadCurmb";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  console.log(pathname, "pathname dekhi");
  return (
    <CommonWrapper>
      <div className="min-h-screen h-full">
        <BreadCurmb />
        <h2>404 Not Found</h2>
        <p>Your visited page not found. You may go home page.</p>
        <Link href="/">Back to home page</Link>
      </div>
    </CommonWrapper>
  );
}
