import { CMS_NAME } from "../lib/constants";
import sideMetadata from "../config/side-metadata";

export default function Intro() {
  return (
    <section className="container mx-auto max-w-2xl flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="text-2xl text-gray-400">{sideMetadata.siteTitle}</div>
      <div className="text-xl text-gray-200">{sideMetadata.description}</div>
    </section>
  );
}
