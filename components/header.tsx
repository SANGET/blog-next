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
          <div className="logo text-gray-400 py-4 hover:text-gray-600">
            {sideMetadata.siteTitle}
          </div>
        </Link>
        <div className="flex items-center">
          <Link href="/posts/about">
            <div className="px-4 py-4 text-gray-500 hover:bg-gray-100">
              About
            </div>
          </Link>
          {/* <div className="px-4 py-4 text-gray-500 hover:bg-gray-100">Tags</div> */}
          <Link
            href={sideMetadata.social.github}
            // target="_blank"
            passHref={true}
          >
            <div className="px-4 py-4 text-gray-500 hover:bg-gray-100">
              <GoOctoface style={{ height: 24, fontSize: 16 }} />
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
}
