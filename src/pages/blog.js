import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      ))}
    </Layout>
  );
};

// page component일 때는, building-block component일 때와 조금 다르게 graphQL 쿼리를 수행하게 된다.
// page component에서는 page query를 사용해야 한다.
// Gatsby는 site가 build될 때 page query를 수행하고, 그 결과를 page component에게 'data'라는 변수로 prop을 넘겨준다.
// 만약 useStaticQuery hook을 사용하게 된다면 component 안에서 만들어줘야 한다.
export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM, D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
