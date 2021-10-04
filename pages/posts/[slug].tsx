import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Container from "@/components/container";
import Content from "@/components/content";
import PostBody from "@/components/post-body";
import Header from "@/components/header";
import PostHeader from "@/components/post-header";
import Layout from "@/components/layout";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import PostTitle from "@/components/post-title";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
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
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = post ? await markdownToHtml(post.content || "") : "";

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
