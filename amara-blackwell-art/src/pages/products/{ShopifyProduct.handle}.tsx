import * as React from 'react';
import { graphql, Link } from 'gatsby';
import {
  CheckCircleIcon,
  StarIcon,
  PlusIcon,
  MinusIcon,
} from '@heroicons/react/24/solid';
import Layout from '../../components/Layout';

const SingleProductPage = ({ data }) => {
  const { shopifyProduct } = data;
  const productImage = shopifyProduct.featuredImage.src;

  return (
    <Layout>
      <div className='single-product bg-gray-200 pt-8 pb-16'>
        <div className='product-title-holder flex items-center lg:items-start lg:mx-24 flex-col w-full'>
          <p className='breadcrumbs text-sm mt-4'>
            Collections {`>> ${shopifyProduct.title}`}
          </p>
        </div>
        <div className='grid lg:grid-cols-2 w-full mt-16'>
          <div className='col-span-1 flex justify-center'>
            <img
              src={productImage}
              alt='Product'
              width='400px'
              height='400px'
              className='rounded-xl'
            />
          </div>
          <div className='col-span-1 flex mx-16 justify-center'>
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

export const SingleProductQuery = graphql`
  query ShopifyProductByHandle($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      description
      featuredImage {
        src
      }
    }
  }
`;

export default SingleProductPage;
