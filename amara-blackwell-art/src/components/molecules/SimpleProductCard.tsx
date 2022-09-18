import React from 'react';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type SimpleProductCardProps = {
  imageURL: IGatsbyImageData;
  imageAlt: string;
  title: string;
  price: number;
};

function SimpleProductCard({
  imageURL,
  imageAlt,
  title,
  price,
}: SimpleProductCardProps) {
  return (
    <div className='flex flex-col justify-center items-start h-full w-full'>
      <GatsbyImage
        className='object-fit object-cover h-full w-full'
        image={imageURL}
        alt={imageAlt}
      />
      <div className='pl-2 font-bold text-2xl py-2 emberly-light text-blue-800'>
        <div className=''>{title}</div>
        <div className='text-3xl'>${price}</div>
      </div>
    </div>
  );
}

export default SimpleProductCard;
