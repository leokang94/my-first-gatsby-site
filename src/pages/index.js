import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>메인 화면입니다.</p>
      <StaticImage alt="Gatsby Icon" src="../images/icon.png" />
    </Layout>
  );
};

export default IndexPage;
