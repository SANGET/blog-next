import fs from "fs";
import fse from "fs-extra";
import { join, basename } from "path";
import dayjs from "dayjs";
import matter from "gray-matter";
import sideMetadata from "@/config/side-metadata";
import glob from "glob";

const postsDirectory = join(process.cwd(), "_posts");

const slugMappingJSONPath = join(process.cwd(), ".slug-mapping.json");

let slugMapping: Record<string, string> = {};

function initSlugMapping() {
  if (fse.existsSync(slugMappingJSONPath)) {
    slugMapping = JSON.parse(
      fs.readFileSync(slugMappingJSONPath, { encoding: "utf-8" }) || "{}"
    );
  } else {
    fs.writeFileSync(slugMappingJSONPath, "{}");
  }
}
initSlugMapping();

function setSlugMapping(slug: string, filepath: string) {
  slugMapping[slug] = filepath;
  fs.writeFileSync(slugMappingJSONPath, JSON.stringify(slugMapping));
}

interface SlugRes {
  slug: string;
  filepath: string;
}

const timeRegExp =
  /(((19[2-9]\d{1})|(20\d{2}))-)?((0?[1-9])|(1[0-2]))-((0?[1-9])|([1-2][0-9])|30|31)-/;
export function getPostSlugs(): string[] {
  // return fs.readdirSync(postsDirectory);
  const slugs = glob.sync(`${postsDirectory}/**/*.md`).map((filepath) => {
    const res = {
      slug: basename(filepath).replace(".md", "").replace(timeRegExp, ""),
      filepath: filepath,
    };
    setSlugMapping(res.slug, res.filepath);
    return res.slug;
  });
  return slugs;
}

export function getSideMeta() {
  return sideMetadata;
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  // const { slug, filepath } = slugConf;
  const filepath = slugMapping[slug];
  if (!filepath) return null;
  const realSlug = slug;
  const fileContents = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(fileContents);

  const items: any = {
    // ...slugConf,
  };

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
    if (field === "date") {
      items[field] = dayjs(data.date).format("YYYY-MM-DD");
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((item) => !!item)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
