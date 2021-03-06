import Head from "next/head";
import Container from "@/components/container";
import MoreStories from "@/components/more-stories";
import HeroPost from "@/components/hero-post";
import Intro from "@/components/intro";
import Layout from "@/components/layout";
import PostList from "@/components/post-list";
import { getAllPosts, getSideMeta } from "@/lib/api";
import sideMetadata from "@/config/side-metadata";

export default function Index({ allPosts }) {
  return (
    <>
      <Layout>
        <Head>
          <title>{sideMetadata.siteTitle}</title>
        </Head>
        <Container>
          {/* <Intro /> */}
          <PostList data={allPosts} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "ignore",
    "excerpt",
  ]).filter((item) => {
    return !item.ignore;
  });

  return {
    props: { allPosts },
  };
}
