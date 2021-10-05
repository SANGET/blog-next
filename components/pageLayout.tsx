import Head from "next/head";
import React from "react";
import Content from "./content";
import PostBody from "./post-body";
import PostHeader from "./post-header";

export default function PageLayout({ post }) {
  return (
    <Content>
      <article className="mb-32 markdown-body">
        <Head>
          <title>{post.title}</title>
        </Head>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
        />
        <PostBody content={post.content} />
      </article>
    </Content>
  );
}
