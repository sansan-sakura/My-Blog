import { GraphQLClient, gql } from "graphql-request";

const graphcms = new GraphQLClient(
  "https://api-eu-central-1.hygraph.com/v2/cl7rd0fcu5zuw01uhgsbn4b49/master"
);

const QUERY = gql`
  {
    postsConnection {
      pageInfo {
       
        pageSize
       
      }
    }
    posts(first: ${getPostsNum * currentPage}, skip:${
  currentPage === 1 ? 0 : getPostsNum * (currentPage + 1)
}) {
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
  const { posts, postsConnection } = await graphcms.request(QUERY);

  return {
    props: {
      posts,
      postsConnection,
    },
  };
}
