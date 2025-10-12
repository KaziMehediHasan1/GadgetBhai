import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen h-full">
      <h2>404 Not Found</h2>
      <p>Your visited page not found. You may go home page.</p>
      <Link href="/">Back to home page</Link>
    </div>
  );
}
