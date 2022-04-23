import {
  Counter,
  GetLikeByTitles,
  GetVisitorsByTitles,
  VisitBlog,
} from "@/services/blog-helper/api";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Content from "./content";
import PostBody from "./post-body";
import PostHeader from "./post-header";

export default function PageLayout({ post }) {
  const [blogInfp, setBlogInfp] = useState({
    visitor: 0,
    liker: 0,
  });

  const visitBlog = (title: string) => {
    return new Promise<Counter>((resolve, reject) => {
      return VisitBlog(title)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  };

  useEffect(() => {
    const title = [post.title];
    visitBlog(post.title).then(() => {
      Promise.all([
        GetVisitorsByTitles(title),
        GetLikeByTitles(title, true),
      ]).then(([visitorRes, likeRes]) => {
        console.log("likeRes :>> ", likeRes);
        setBlogInfp({
          visitor: visitorRes.counter[0],
          liker: likeRes.counter,
        });
      });
    });
    return () => {};
  }, []);

  return (
    <Content>
      <article className="mb-16 markdown-body">
        <Head>
          <title>{post.title}</title>
        </Head>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          blogInfp={blogInfp}
        />
        <PostBody content={post.content} />
      </article>
    </Content>
  );
}
