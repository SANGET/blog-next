import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-end">
      <Link href="/">
        <a className="px-4 py-2 hover:bg-gray-100">Blog</a>
      </Link>
      <Link href="/about">
        <a className="px-4 py-2 hover:bg-gray-100">About</a>
      </Link>
      <Link href="/tags">
        <a className="px-4 py-2 hover:bg-gray-100">Tags</a>
      </Link>
    </div>
  );
}
