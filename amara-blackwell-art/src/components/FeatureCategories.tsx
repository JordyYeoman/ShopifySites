import React from 'react';
import SectionDescription from './atoms/SectionDescription';
import SectionTitle from './atoms/SectionTitle';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql, Link } from 'gatsby';
import SecondaryButton from './atoms/SecondaryButton';
import IntersectionObserverWrapper from './utils/IntersectionObserverWrapper';

function FeatureCategories() {
  const data = useStaticQuery(graphql`
    query FeatureCategoriesQuery {
      allShopifyProduct(limit: 4) {
        nodes {
          featuredImage {
            gatsbyImageData
          }
          onlineStoreUrl
          description
        }
      }
    }
  `);
  return (
    <div>
      <IntersectionObserverWrapper duration={'duration-[1.5s]'}>
        <div className='max-w-2xl text-center flex items-center flex-col mx-auto pt-24 pb-16'>
          <SectionTitle title={'Popular Collections'} />
          <SectionDescription
            description={
              'Maecenas commodo augue tristique sagittis vehicula. Suspendisse a accumsan felis, in varius magna. Duis tincidunt lectus non volutpat scelerisque. Duis eu sapien non elit volutpat consectetur sed at mi.'
            }
          />
        </div>
      </IntersectionObserverWrapper>
      <IntersectionObserverWrapper duration={'duration-500'}>
        <div className='flex h-[40rem]'>
          <div className='flex flex-col h-full w-full'>
            <div className='w-full h-3/5 p-2 relative group'>
              <Link to='/'>
                <GatsbyImage
                  className='object-fit object-cover h-full w-full'
                  image={
                    data?.allShopifyProduct?.nodes[0]?.featuredImage
                      ?.gatsbyImageData
                  }
                  alt={data?.allShopifyProduct?.nodes[0]?.description}
                />
              </Link>
              <div className='absolute top-0 z-20 left-0 transition duration-300 flex flex-col items-center justify-center w-full h-full'>
                <SectionTitle
                  title={'Amazing Collection'}
                  size={'text-4xl'}
                  color={'text-white'}
                />
                <SectionDescription
                  description={
                    'This collection includes all of the summer range'
                  }
                  color={'text-white'}
                />
                <SecondaryButton
                  buttonText={'View Collection'}
                  buttonLink={'/'}
                />
              </div>
              <div className='group-hover:pointer-events-none bg-gradient-to-br from-blue-300 to-slate-900 opacity-60 transition duration-300 w-full h-full absolute top-0 z-10 left-0'></div>
            </div>

            <div className='w-full h-2/5 p-2 relative group'>
              <OverlayGradient />
              <Link to='/'>
                <GatsbyImage
                  className='object-fit object-cover h-full w-full'
                  image={
                    data?.allShopifyProduct?.nodes[1]?.featuredImage
                      ?.gatsbyImageData
                  }
                  alt={data?.allShopifyProduct?.nodes[1]?.description}
                />
              </Link>
              <OverlayCard
                title={'Amazing Collection'}
                description={'This collection includes all of the summer range'}
                buttonText={'View Collection'}
                buttonLink={'/'}
                titleSize={'text-4xl'}
              />
            </div>
          </div>
          <div className='flex flex-col h-full w-full'>
            <div className='w-full h-4/6 p-2 relative group'>
              <OverlayGradient />
              <Link to='/'>
                <GatsbyImage
                  className='object-fit object-cover h-full w-full'
                  image={
                    data?.allShopifyProduct?.nodes[2]?.featuredImage
                      ?.gatsbyImageData
                  }
                  alt={data?.allShopifyProduct?.nodes[2]?.description}
                />
              </Link>
              <OverlayCard
                title={'Amazing Collection'}
                description={'This collection includes all of the summer range'}
                buttonText={'View Collection'}
                buttonLink={'/'}
                titleSize={'text-4xl'}
              />
            </div>
            <div className='w-full h-2/6 p-2 relative group'>
              <OverlayGradient />
              <Link className='' to='/'>
                <GatsbyImage
                  className='object-fit object-cover h-full w-full'
                  image={
                    data?.allShopifyProduct?.nodes[3]?.featuredImage
                      ?.gatsbyImageData
                  }
                  alt={data?.allShopifyProduct?.nodes[3]?.description}
                />
              </Link>
              <OverlayCard
                title={'Amazing Collection'}
                description={'This collection includes all of the summer range'}
                buttonText={'View Collection'}
                buttonLink={'/'}
                titleSize={'text-4xl'}
              />
            </div>
          </div>
        </div>
      </IntersectionObserverWrapper>
    </div>
  );
}

export default FeatureCategories;

const OverlayCard = ({
  title,
  description,
  buttonText,
  buttonLink,
  titleSize,
}: {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  titleSize?: string;
}) => {
  return (
    <div className='absolute top-0 z-20 left-0 transition duration-300 flex flex-col opacity-0 group-hover:opacity-100 items-center justify-center w-full h-full'>
      <SectionTitle title={title} size={titleSize} color={'text-white'} />
      <SectionDescription description={description} color={'text-white'} />
      <SecondaryButton buttonText={buttonText} buttonLink={buttonLink} />
    </div>
  );
};

const OverlayGradient = () => {
  return (
    <div className='group-hover:pointer-events-none bg-gradient-to-br from-blue-300 to-slate-900 opacity-0 group-hover:opacity-60 transition duration-300 w-full h-full absolute top-0 z-10 left-0'></div>
  );
};
