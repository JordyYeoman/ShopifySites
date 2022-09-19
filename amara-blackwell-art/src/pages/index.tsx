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
import LargeShowcase from '../components/organisms/LargeShowcase';

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <FeatureCategories />
      <Spacer />
      <LargeShowcase
        description={
          'Mauris ut dignissim lectus. Etiam varius aliquam mattis. Suspendisse et mauris tellus. Curabitur ligula justo, sagittis et velit eget, gravida tristique erat. Duis dictum tellus sapien, et tincidunt sapien scelerisque eu.'
        }
        buttonText={'Discover More'}
        buttonLink={'/'}
      />
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

const Spacer = () => {
  return <div className='pt-36'></div>;
};
