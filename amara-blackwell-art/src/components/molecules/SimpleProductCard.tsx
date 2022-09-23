import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

type SimpleProductCardProps = {
  imageURL: IGatsbyImageData;
  imageAlt: string;
  title: string;
  price: number;
  handle: string;
};

function SimpleProductCard({
  imageURL,
  imageAlt,
  title,
  price,
  handle,
}: SimpleProductCardProps) {
  return (
    <div className='flex flex-col justify-center items-start h-full w-full relative group'>
      <GatsbyImage
        className='object-fit object-cover h-full w-full'
        image={imageURL}
        alt={imageAlt}
      />
      <Link
        to={`products/${handle}`}
        className='absolute 2-10 h-8 right-16 cursor-pointer bottom-32 bg-white rounded-lg px-2 py-1 hover:bg-blue-500 hover:text-white'
      >
        View
      </Link>
      <div className='pl-2 font-bold text-2xl py-2 emberly-light text-blue-800'>
        <div className=''>{title}</div>
        <div className='text-3xl'>${price}</div>
      </div>
    </div>
  );
}

export default SimpleProductCard;
