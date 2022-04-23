import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@/components/container";
import Layout from "@/components/layout";
import { getPostBySlug, getAllPosts } from "@/lib/api";
import PostTitle from "@/components/post-title";
import markdownToHtml from "@/lib/markdownToHtml";
import PageLayout from "@/components/pageLayout";
import Comment from "@/components/comment";

const PostLayoutMap = {
  page: PageLayout,
};

export default function Post({ post }) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  // console.log("post :>> ", post);
  const { comment = true } = post;
  const pageLayout = post.layout;
  const PickPageLayout = PostLayoutMap[pageLayout] || PageLayout;

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <PickPageLayout post={post} />
          // <Content>
          //   <article className="mb-32 markdown-body">
          //     <Head>
          //       <title>{post.title}</title>
          //     </Head>
          //     <PostHeader
          //       title={post.title}
          //       coverImage={post.coverImage}
          //       date={post.date}
          //       author={post.author}
          //     />
          //     <PostBody content={post.content} />
          //   </article>
          // </Content>
        )}
        {comment && <Comment />}
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
    "layout",
    "content",
    "ogImage",
    "comment",
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
          comment: post.comment,
        },
      };
    }),
    fallback: false,
  };
}
