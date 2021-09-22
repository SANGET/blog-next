import fs from "fs";
import { join, basename } from "path";
import dayjs from "dayjs";
import matter from "gray-matter";
import sideMetadata from "@/config/side-metadata";
import glob from "glob";

const postsDirectory = join(process.cwd(), "_posts");

interface SlugRes {
  slug: string;
  filepath: string;
}

const timeRegExp =
  /(((19[2-9]\d{1})|(20\d{2}))-)?((0?[1-9])|(1[0-2]))-((0?[1-9])|([1-2][0-9])|30|31)-/;
export function getPostSlugs(): SlugRes[] {
  // return fs.readdirSync(postsDirectory);
  const slugs = glob.sync(`${postsDirectory}/**/*.md`).map((filepath) => {
    return {
      slug: basename(filepath).replace(".md", ""),
      filepath: filepath,
    };
  });
  return slugs;
}

export function getSideMeta() {
  return sideMetadata;
}

export function getPostBySlug(slugConf: SlugRes, fields: string[] = []) {
  const { slug, filepath } = slugConf;
  if (!filepath) return null;
  const realSlug = slug;
  const fileContents = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(fileContents);

  const items: any = {
    ...slugConf,
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
