import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Welcome to Home Page!</h1>
      <Link href="/blog" className="text-black text-xl hover:text-blue-400">
        Blog
      </Link>
    </div>
  );
}
