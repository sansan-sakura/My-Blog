import styles from "../../styles/Slug.module.css";
import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.hygraph.com/v2/cl7rd0fcu5zuw01uhgsbn4b49/master"
);

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title

      publishedDate
      content {
        html
      }
      image {
        url
      }

      category {
        categories
      }
    }
  }
`;

export async function getStaticPaths() {
  const { posts } = await graphcms.request(SLUGLIST);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const slug = params.slug;

  const data = await graphcms.request(QUERY, { slug });

  const post = data.post;
  console.log(data);
  return {
    props: {
      post,
    },
  };
}

export default function BlogPost({ post }) {
  return (
    <div className={styles.container}>
      <img src={post.image.url} alt="" className={styles.coverimage} />
      <span className={styles.category}>{post.category.categories}</span>
      <span className={styles.date}>{post.datePublished}</span>
      <h2 className={styles.title}>{post.title}</h2>

      <div
        className={styles.main_text}
        dangerouslySetInnerHTML={{ __html: post.content.html }}
      ></div>
    </div>
  );
}
