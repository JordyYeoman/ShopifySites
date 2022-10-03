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

const SingleProductPage = ({ data }) => {
  const { shopifyProduct } = data;
  const productImage = shopifyProduct.featuredImage.gatsbyImageData;

  return (
    <Layout>
      <div className='single-product bg-gray-200 py-8 px-12'>
        <BreadCrumbs shopifyProduct={shopifyProduct} />
        <div className='grid lg:grid-cols-2 w-full mt-4'>
          <div className='col-span-1 flex justify-center'>
            <div className='w-full h-full relative bg-red-200'>
              {/* <GatsbyImage
                className='object-fit object-cover h-full w-full'
                image={productImage}
                alt={productImage}
              /> */}
            </div>
          </div>
          <div className='col-span-1 flex justify-center'>
            <div className='product-info bg-purple-400 rounded-md shadow-xl mx-16 px-16 py-8'>
              <h1 className='single-product-title text-white text-2xl lg:text-3xl font-bold drop-shadow-xl'>
                {shopifyProduct.title}
              </h1>
              <div className='grid lg:grid-cols-2 flex flex-row'>
                <div className='col-span-1'>
                  <p className='single-product-description mt-2 font-secondary-font font-bold text-white text-lg'>
                    $399.00
                  </p>
                </div>
                <div className='col-span-1 flex flex-row items-center'>
                  <p className='single-product-description mt-2 font-secondary-font font-bold text-white text-lg'>
                    In Stock
                  </p>
                  <CheckCircleIcon className='ml-2 mt-1 text-green-300 w-6 h-6' />
                </div>
              </div>
              <p className='single-product-description mt-4 text-white text-md'>
                {shopifyProduct.description}
              </p>
              <div className='stars flex flex-row mt-2'>
                <StarIcon className='h-8 w-8 text-yellow-400 m-1' />
                <StarIcon className='h-8 w-8 text-yellow-400 m-1' />
                <StarIcon className='h-8 w-8 text-yellow-400 m-1' />
                <StarIcon className='h-8 w-8 text-yellow-400 m-1' />
                <StarIcon className='h-8 w-8 text-yellow-400 m-1' />
              </div>
              <div className='qty-btn-holder flex items-center flex-row mt-2'>
                <button className='bg-black p-2 rounded-lg'>
                  <MinusIcon className='text-white h-4 w-4' />
                </button>
                <input
                  type='text'
                  value='1'
                  className='mx-2 bg-white text-purple-400 font-bold text-xl w-12 h-8 text-center rounded-lg'
                />
                <button className='bg-black p-2 rounded-lg'>
                  <PlusIcon className='text-white h-4 w-4' />
                </button>
              </div>
              <div className='buy-btn-holder flex justify-start text-left mt-5'>
                <Link to='/'>
                  <button className='bg-black px-8 py-2 text-white rounded-lg text-center transition-all duration-300 hover:bg-primary-gray'>
                    Add to Cart
                  </button>
                </Link>
                <Link to='/'>
                  <button className='ml-3 bg-white px-8 py-2 text-black rounded-lg text-center transition-all duration-300 hover:bg-primary-gray'>
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const BreadCrumbs = ({ shopifyProduct }) => {
  return (
    <div className='flex items-center lg:items-start flex-col w-full'>
      <p className='text-[10px]'>
        <Link to='/'>
          <span className='bg-white rounded px-2 py-1 transition duration-300 hover:bg-slate-300 cursor-pointer'>
            Shop
          </span>
        </Link>
        <span className='rounded py-1'>{' > '}</span>
        <Link to='/'>
          <span className='bg-white rounded px-2 py-1 transition duration-300 hover:bg-slate-300 cursor-pointer'>
            Collections
          </span>
        </Link>
        <span className='rounded py-1'>{' > '}</span>
        <Link to='/'>
          <span className='bg-white rounded px-2 py-1 transition duration-300 hover:bg-slate-300 cursor-pointer'>{` ${shopifyProduct.title}`}</span>
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
