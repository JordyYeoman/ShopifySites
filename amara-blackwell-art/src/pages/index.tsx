import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout";
import FeatureProducts from "../components/FeatureProducts";
import SingleFeatureProduct from "../components/SingleFeatureProduct";
import ProductGrid from "../components/ProductGrid";
import ProductGridNoFeature from "../components/ProductGridNoFeature";
import SingleProductCardSmall from "../components/SingleProductCardSmall";

const IndexPage = () => {
  console.log("FUCK GATSBY");
  return (
    <Layout>
      <SingleFeatureProduct />
      <ProductGrid />
      <FeatureProducts />
      <SingleProductCardSmall />
      <ProductGridNoFeature />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
