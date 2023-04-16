import sideMetadata from "@/config/side-metadata";
import { HiOutlineMailOpen } from "react-icons/hi";
import Container from "./container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2 no-print mt-4">
      <Container>
        <div className="py-8 flex justify-between items-center text-gray-500">
          <span>
            ©{new Date().getFullYear()} {sideMetadata.author}
          </span>
          <Link href={`mailto:${sideMetadata.social.mail}`}>
            <HiOutlineMailOpen style={{ fontSize: 18 }} />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
