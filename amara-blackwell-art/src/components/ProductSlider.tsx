import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import DefaultButton from './atoms/DefaultButton';
import SectionDescription from './atoms/SectionDescription';
import SectionTitle from './atoms/SectionTitle';
import SimpleProductCard from './molecules/SimpleProductCard';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function ProductSlider() {
  const data = useStaticQuery(graphql`
    query BestSellersQuery {
      allShopifyProduct(limit: 10, filter: { tags: { in: "best-seller" } }) {
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
          handle
          title
        }
      }
    }
  `);
  const products = data?.allShopifyProduct?.nodes;
  return (
    <div className='flex h-full py-48'>
      <div className='flex flex-col justify-center items-start w-4/12 px-12'>
        <SectionTitle title={'Our best sellers'} />
        <SectionDescription
          description={
            'Donec in urna magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tellus metus, interdum at consectetur feugiat, viverra nec arcu.'
          }
        />
        <DefaultButton buttonText={'Discover More'} buttonLink={'/'} />
      </div>
      <div className='w-8/12 h-full flex'>
        <Swiper
          className='w-full h-[525px] pb-[25px]'
          pagination={true}
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation]}
          slidesPerView={2}
          spaceBetween={10}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {products.map((product: any) => (
            <SwiperSlide key={product.title} className='h-full w-full'>
              <SimpleProductCard
                imageURL={product.featuredImage.gatsbyImageData}
                imageAlt={product.description}
                title={product.title}
                price={product.priceRangeV2.maxVariantPrice.amount}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductSlider;
