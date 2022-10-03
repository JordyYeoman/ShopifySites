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
  const entry = useIntersectionObserver(ref, {
    threshold: 1,
    rootMargin: '25%',
  });
  const isVisible = !!entry?.isIntersecting;

  return (
    <Layout>
      <div className='single-product bg-white relative z-10 px-0 md:px-12 md:pb-12 max-w-screen-2xl mx-auto xl:min-h-[90vh]'>
        <div className='px-4 md:px-0 pt-8 md:pb-8'>
          <BreadCrumbs shopifyProduct={shopifyProduct} />
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full'>
          <div className='col-span-1 flex justify-center flex-col'>
            <div className='block md:hidden px-4'>
              <ProductHeading shopifyProduct={shopifyProduct} />
            </div>
            <div className='w-full h-full h-[calc(100vh-2rem)] md:h-[calc(100vh-10rem)] xl:h-[calc(100vh-16rem)] max-h-screen-lg relative bg-red-200'>
              <GatsbyImage
                className='object-fit object-cover h-full w-full'
                image={productImage}
                alt={'TestProductImageTODOREMOVETODO'}
              />
            </div>
          </div>
          <div className='col-span-1 flex justify-center'>
            <div className='w-full px-4 py-8 lg:pt-2 lg:px-6'>
              <div className='hidden md:block'>
                <ProductHeading shopifyProduct={shopifyProduct} />
              </div>
              <div className='flex flex-col pb-2 lg:py-4'>
                <p className='text-sm font-bold pb-1'>Description:</p>
                <p className='single-product-description text-md'>
                  {shopifyProduct.description}
                </p>
              </div>
              <div className='flex justify-between py-4 lg:py-8'>
                <div className='stars flex flex-col'>
                  <p className='text-sm font-bold pb-1'>Product Rating:</p>
                  <div className='flex'>
                    <StarIcon className='h-5 w-5 text-yellow-400' />
                    <StarIcon className='h-5 w-5 text-yellow-400' />
                    <StarIcon className='h-5 w-5 text-yellow-400' />
                    <StarIcon className='h-5 w-5 text-yellow-400' />
                    <StarIcon className='h-5 w-5 text-yellow-400' />
                  </div>
                </div>
                <div className='items-start justify-start flex-col'>
                  <p className='text-sm font-bold pb-1'>Qty:</p>
                  <div className='flex flex-row items-center'>
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
                      className='mx-2 bg-slate-300 text-slate-700 font-bold text-xl w-12 h-8 text-center rounded-lg'
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
              </div>
              <div className='flex justify-start flex-col mt-5 transition duration-300'>
                <div
                  id='addToCart'
                  className={`fixed transition-opacity w-screen left-0 bottom-0 duration-500 ${
                    isVisible ? 'opacity-0 h-0' : 'h-auto opacity-1'
                  }`}
                >
                  <Link to='/'>
                    <button className='transition duration-300 bg-slate-900 px-8 py-3 text-white w-full text-center transition-all duration-300 hover:bg-primary-gray'>
                      Add to Cart
                    </button>
                  </Link>
                </div>
                <div
                  id='addToCart'
                  className={`relative transition duration-300 ${
                    isVisible ? 'relative w-full' : 'opacity-0 w-0'
                  }`}
                >
                  <Link to='/'>
                    <button className='transition duration-300 bg-slate-900 px-8 py-3 text-white w-full text-center transition-all duration-300 hover:bg-slate-400'>
                      Add to Cart
                    </button>
                  </Link>
                </div>
                <div ref={ref}>
                  <Link to='/'>
                    <button className='transition mt-2 duration-300 bg-slate-300 px-8 py-3 text-slate-700 w-full text-center transition-all duration-300 hover:bg-slate-400'>
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
    <div className='grid flex flex-row pt-4 lg:pt-0 pb-8'>
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
      description
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
