import * as React from 'react';
import type { HeadFC } from 'gatsby';
import Layout from '../components/Layout';
import FeatureProducts from '../components/FeatureProducts';
import SingleFeatureProduct from '../components/SingleFeatureProduct';
import ProductGrid from '../components/ProductGrid';
import ProductGridNoFeature from '../components/ProductGridNoFeature';
import SingleProductCardSmall from '../components/SingleProductCardSmall';
import Hero from '../components/Hero';
import ProductSlider from '../components/ProductSlider';
import FeatureCategories from '../components/FeatureCategories';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <FeatureCategories />
      <ProductSlider />
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
