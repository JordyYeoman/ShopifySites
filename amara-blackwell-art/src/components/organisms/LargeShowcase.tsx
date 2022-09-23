import React from 'react';
import DefaultButton from '../atoms/DefaultButton';
import SectionDescription from '../atoms/SectionDescription';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import IntersectionObserverWrapper from '../utils/IntersectionObserverWrapper';

type ShowcaseProps = {
  description: string;
  buttonText: string;
  buttonLink: string;
};

function LargeShowcase({ description, buttonText, buttonLink }: ShowcaseProps) {
  return (
    <div className='flex flex-col md:flex-row relative max-h-[50rem]'>
      <div className='absolute w-full left-0 z-10 flex top-4 md:top-24 justify-center'>
        <SplitColorText text={'Digital Creations'} />
      </div>
      <div className='relative w-full md:w-6/12 bg-slate-50 pb-24 pt-48 px-8 pt-4'>
        <div className='flex md:hidden absolute top-0 left-0 w-full z-0 h-full'>
          <div className='w-6/12 h-full bg-slate-50'></div>
          <div className='w-6/12 h-full bg-blue-200'></div>
        </div>
        <IntersectionObserverWrapper duration={'duration-500'}>
          <CircleShowcaseButton />
        </IntersectionObserverWrapper>
        <div className='pt-40 md:pt-60 lg:pt-0 lg:h-[80%]'></div>
        <div className='z-20 relative text-center md:text-left max-w-2xl h-32'>
          <IntersectionObserverWrapper duration={'duration-[1.5s]'}>
            <SectionDescription description={description} />
            <div className='pt-8'></div>
            <DefaultButton buttonText={buttonText} buttonLink={buttonLink} />
          </IntersectionObserverWrapper>
        </div>
      </div>
      <div className='w-full md:w-6/12'>
        <img
          className='w-full h-full object-cover'
          src={'/pexels-ekrulila-3246665.jpeg'}
          alt={'Showcase Artwork latest painting from Amara Blackwell'}
        />
        <Link to='/'>
          {/* <GatsbyImage
            className='object-fit object-cover h-full w-full'
            image={
              data?.allShopifyProduct?.nodes[0]?.featuredImage?.gatsbyImageData
            }
            alt={data?.allShopifyProduct?.nodes[0]?.description}
          /> */}
        </Link>
      </div>
    </div>
  );
}

export default LargeShowcase;

const CircleShowcaseButton = () => {
  return (
    <div className='hidden sm:flex bg-blue-600 rounded-full text-xs w-20 flex items-center justify-center h-20 font-bold absolute top-4 left-4 p-4 text-white -rotate-45 emberly-black text-center tracking-widest font-bold uppercase letter-spacing'>
      Latest <br />
      Artwork
    </div>
  );
};

const SplitColorText = ({ text }: { text: string }) => {
  let wordsArr: string[] = text.split(' ');
  let firstWordLength: number = wordsArr[0].length;
  let secondWordLength: number = wordsArr[1].length;
  let firstPortionWordOne: string = wordsArr[0].slice(
    0,
    Math.floor(firstWordLength / 2)
  );
  let secondPortionWordOne: string = wordsArr[0].slice(
    Math.floor(firstWordLength / 2),
    firstWordLength
  );
  let firstPortionWordTwo: string = wordsArr[1].slice(
    0,
    Math.floor(secondWordLength / 2)
  );
  let secondPortionWordTwo: string = wordsArr[1].slice(
    Math.floor(secondWordLength / 2),
    secondWordLength
  );

  return (
    <div className='flex flex-col text-center emberly-black text-[7rem]'>
      <IntersectionObserverWrapper duration={'duration-[1.25s]'}>
        <div>
          <span className='text-blue-700'>{firstPortionWordOne}</span>
          <span className='text-white'>{secondPortionWordOne}</span>
        </div>
        <div className='-mt-12'>
          <span className='text-blue-700'>{firstPortionWordTwo}</span>
          <span className='text-white'>{secondPortionWordTwo}</span>
        </div>
      </IntersectionObserverWrapper>
    </div>
  );
};
