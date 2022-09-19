import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import IntersectionObserverWrapper from './utils/IntersectionObserverWrapper';
import { GatsbyImage } from 'gatsby-plugin-image';
import SectionTitle from './atoms/SectionTitle';
import SectionDescription from './atoms/SectionDescription';
import DefaultButton from './atoms/DefaultButton';

function Hero() {
  const data = useStaticQuery(graphql`
    query FeatureProductsQuery {
      allShopifyProduct(limit: 10, filter: { tags: { in: "feature" } }) {
        nodes {
          description
          status
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
          }
          featuredImage {
            gatsbyImageData
          }
        }
      }
    }
  `);

  return (
    <div className='md:h-[70vh] w-full flex flex-col md:flex-row w-full'>
      <div className='h-full w-full md:w-1/2 bg-red-200'>
        <GatsbyImage
          className='object-fit object-cover h-full w-full'
          image={
            data?.allShopifyProduct?.nodes[2]?.featuredImage?.gatsbyImageData
          }
          alt={'Feature dog portrait artwork'}
        />
      </div>
      <div className='h-full w-full md:w-1/2 bg-green-200 flex flex-col justify-center'>
        <div className='text-black p-16'>
          <IntersectionObserverWrapper duration={'duration-500'}>
            <SectionTitle title={'Latest Pieces'} />
            <SectionDescription
              description={
                "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
              }
            />
            <div className='text-xl font-normal pt-2 max-w-lg'></div>
            <DefaultButton buttonText={'Find out more'} buttonLink={'/'} />
          </IntersectionObserverWrapper>
        </div>
      </div>
    </div>
  );
}

export default Hero;
