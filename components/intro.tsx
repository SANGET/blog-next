import { CMS_NAME } from "../lib/constants";
import sideMetadata from "../config/side-metadata";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div>{sideMetadata.siteTitle}</div>
      <div>{sideMetadata.description}</div>
    </section>
  );
}
