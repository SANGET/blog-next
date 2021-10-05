import sideMetadata from "@/config/side-metadata";
import Link from "next/link";

import styles from "./style.module.scss";

export default function Header() {
  return (
    <div
      className={`flex justify-between shadow-sm ${styles.blogHeader} no-print`}
    >
      <Link href="/">
        <a className="logo text-gray-400 px-4 py-2 hover:text-gray-600">
          {sideMetadata.siteTitle}
        </a>
      </Link>
      <div className="flex items-center">
        {/* <Link href="/">
          <a className="px-4 py-2 text-gray-500 hover:bg-gray-100">Blog</a>
        </Link> */}
        <Link href="/posts/about">
          <a className="px-4 py-2 text-gray-500 hover:bg-gray-100">About</a>
        </Link>
        <Link href="/tags">
          <a className="px-4 py-2 text-gray-500 hover:bg-gray-100">Tags</a>
        </Link>
      </div>
    </div>
  );
}
