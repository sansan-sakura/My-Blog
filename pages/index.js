import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCards";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.hygraph.com/v2/cl7rd0fcu5zuw01uhgsbn4b49/master"
);

const QUERY = gql`
  {
    posts {
      id
      slug
      title
      publishedDate
      image {
        url
      }
      content {
        html
      }
      category {
        categories
      }
    }
  }
`;

export async function getStaticProps() {
  const { posts } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }) {
  return (
    <div className={styles.main_container}>
      <Head>
        <title>My blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} id="blogs">
        <article className={styles.main_article}>
          {posts.map((post) => {
            return (
              <BlogCard
                title={post.title}
                image={post.image}
                key={post.id}
                datePublished={post.datePublished}
                slug={post.slug}
                content={post.content.html}
                category={post.category}
              />
            );
          })}
        </article>
      </main>
    </div>
  );
}
