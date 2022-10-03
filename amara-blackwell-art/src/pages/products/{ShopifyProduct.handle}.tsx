import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  CheckCircleIcon,
  StarIcon,
  PlusIcon,
  MinusIcon,
} from '@heroicons/react/24/solid';
import Layout from '../../components/Layout';
import { useState } from 'react';
import useIntersectionObserver from '../../utils/hooks/useIntersectionObserver';

const SingleProductPage = ({ data }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { shopifyProduct } = data;
  const productImage = shopifyProduct.featuredImage.gatsbyImageData;
  // Add To Cart helpers
  const ref = React.useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  console.log('You visible?', isVisible);

  return (
    <Layout>
      <div className='single-product bg-slate-50 py-8 px-0 md:px-12'>
        <div className='px-4 md:px-0'>
          <BreadCrumbs shopifyProduct={shopifyProduct} />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full mt-4'>
          <div className='col-span-1 flex justify-center flex-col'>
            <div className='block md:hidden px-4'>
              <ProductHeading shopifyProduct={shopifyProduct} />
            </div>
            <div className='w-full h-full h-[calc(100vh-2rem)] relative bg-red-200'>
              <GatsbyImage
                className='object-fit object-cover h-full w-full'
                image={productImage}
                alt={'TestProductImageTODOREMOVETODO'}
              />
            </div>
          </div>
          <div className='col-span-1 flex justify-center'>
            <div className='w-full px-4 py-8'>
              <div className='hidden md:block'>
                <ProductHeading shopifyProduct={shopifyProduct} />
              </div>
              <p className='single-product-description text-white text-md'>
                {shopifyProduct.description}
              </p>
              <div className='flex justify-between'>
                <div className='stars flex flex-col'>
                  <p className='text-sm'>Rating:</p>
                  <div className='flex'>
                    <StarIcon className='h-5 w-5 text-yellow-400' />
                    <StarIcon className='h-5 w-5 text-yellow-400' />
                    <StarIcon className='h-5 w-5 text-yellow-400' />
                    <StarIcon className='h-5 w-5 text-yellow-400' />
                    <StarIcon className='h-5 w-5 text-yellow-400' />
                  </div>
                </div>
                <div className='qty-btn-holder flex items-center flex-row mt-2'>
                  <button
                    className='bg-black p-2 rounded-lg'
                    onClick={() => {
                      let newVal = quantity - 1;
                      if (newVal < 1 || newVal === 1) {
                        setQuantity(1);
                        return;
                      }
                      setQuantity(newVal);
                    }}
                  >
                    <MinusIcon className='text-white h-4 w-4' />
                  </button>
                  <input
                    type='number'
                    id='qty'
                    value={quantity}
                    onChange={(inputVal) => {
                      let val = parseInt(inputVal?.target?.value) ?? '';
                      setQuantity(val);
                    }}
                    className='mx-2 text-slate-400 font-bold text-xl w-12 h-8 text-center rounded-lg'
                  />
                  <button className='bg-black p-2 rounded-lg'>
                    <PlusIcon
                      className='text-white h-4 w-4'
                      onClick={() => {
                        setQuantity(quantity + 1);
                      }}
                    />
                  </button>
                </div>
              </div>
              <div className='buy-btn-holder flex justify-start text-left mt-5 transition duration-300'>
                <div
                  id='addToCart'
                  className={`fixed bottom-0 w-screen left-0 transition duration-300 ${
                    isVisible ? 'relative' : ''
                  }`}
                >
                  <Link to='/'>
                    <button className='transition duration-300 bg-slate-900 px-8 py-3 text-white w-full text-center transition-all duration-300 hover:bg-primary-gray'>
                      Add to Cart
                    </button>
                  </Link>
                </div>
                <div ref={ref}>
                  <Link to='/'>
                    <button className='w-full ml-3 bg-white px-8 py-2 text-black rounded-lg text-center transition-all duration-300 hover:bg-primary-gray'>
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const ProductHeading = ({ shopifyProduct }) => {
  return (
    <div className='grid lg:grid-cols-2 flex flex-row pb-8'>
      <h2 className='single-product-title text-slate-700 text-3xl lg:text-3xl font-bold drop-shadow-xl'>
        {shopifyProduct.title}
      </h2>
      <p>{shopifyProduct?.category ?? 'Handbags'}</p>
      <div className='col-span-1 flex flex-row items-center justify-between'>
        <p className='single-product-description font-secondary-font font-bold text-slate-700 text-lg'>
          ${shopifyProduct?.priceRangeV2?.maxVariantPrice?.amount}.00
        </p>
        <div className='flex items-center rounded bg-slate-300 px-2 py-1'>
          <p className='single-product-description font-secondary-font font-bold text-slate-700 text-xs'>
            In Stock
          </p>
          <CheckCircleIcon className='ml-2 fill-white w-4 h-4' />
        </div>
      </div>
    </div>
  );
};

const BreadCrumbs = ({ shopifyProduct }) => {
  return (
    <div className='w-full items-start flex flex-col w-full'>
      <p className='text-[10px]'>
        <Link to='/'>
          <span className='bg-slate-200 rounded px-2 py-1 transition duration-300 hover:bg-slate-300 cursor-pointer'>
            Shop
          </span>
        </Link>
        <span className='rounded py-1'>{' > '}</span>
        <Link to='/'>
          <span className='bg-slate-200 rounded px-2 py-1 transition duration-300 hover:bg-slate-300 cursor-pointer'>
            Collections
          </span>
        </Link>
        <span className='rounded py-1'>{' > '}</span>
        <Link to='/'>
          <span className='bg-slate-200 rounded px-2 py-1 transition duration-300 hover:bg-slate-300 cursor-pointer'>{` ${shopifyProduct.title}`}</span>
        </Link>
      </p>
    </div>
  );
};

export const SingleProductQuery = graphql`
  query ShopifyProductByHandle($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      vendor
      variants {
        availableForSale
        barcode
        compareAtPrice
        createdAt
        displayName
      }
      totalVariants
      totalInventory
      templateSuffix
      storefrontId
      shopifyId
      status
      publishedAt
      productType
      collections {
        handle
        productsCount
        products {
          handle
          priceRangeV2 {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
          productType
          featuredImage {
            gatsbyImageData
          }
        }
      }
      priceRangeV2 {
        maxVariantPrice {
          amount
          currencyCode
        }
        minVariantPrice {
          amount
          currencyCode
        }
      }
      featuredImage {
        gatsbyImageData
      }
    }
  }
`;

export default SingleProductPage;
