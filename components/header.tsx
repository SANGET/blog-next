import sideMetadata from "@/config/side-metadata";
import { GoOctoface } from "react-icons/go";
import Link from "next/link";
import Container from "./container";

import styles from "./style.module.scss";

export default function Header() {
  return (
    <div className={`${styles.blogHeader} no-print`}>
      <Container className="flex justify-between">
        <Link href="/">
          <a className="logo text-gray-400 py-4 hover:text-gray-600">
            {sideMetadata.siteTitle}
          </a>
        </Link>
        <div className="flex items-center">
          <Link href="/posts/about">
            <a className="px-4 py-4 text-gray-500 hover:bg-gray-100">About</a>
          </Link>
          {/* <a className="px-4 py-4 text-gray-500 hover:bg-gray-100">Tags</a> */}
          <a
            href={sideMetadata.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-4 text-gray-500 hover:bg-gray-100"
          >
            <GoOctoface style={{ height: 24, fontSize: 16 }} />
          </a>
        </div>
      </Container>
    </div>
  );
}
