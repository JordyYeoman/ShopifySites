import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";

type Props = {
  gatsbyImageData: IGatsbyImageData;
  imageAlt: string;
  title: string;
  price: number;
  handle: string;
  id: string;
};

function SingleProductCardSmall({
  gatsbyImageData,
  imageAlt,
  title,
  price,
  handle,
  id,
}: Props) {
  return (
    <div className="p-4 translate-y-0 transition duration-300 hover:-translate-y-1">
      <div className="w-72 max-w-1/3 md:max-w-xs mx-auto">
        <div className="bg-slate-50 shadow-md rounded-sm max-w-sm">
          <Link to={`products/${handle}`}>
            <GatsbyImage
              className="object-fit object-cover h-full w-full rounded-t-sm p-8"
              image={gatsbyImageData}
              alt={imageAlt}
            />
          </Link>
          <div className="px-3 pb-5">
            <Link to={`products/${handle}`}>
              <h3 className="text-gray-900 font-semibold text-xl tracking-tight pt-4">
                {title ?? "Pencil Best Friend Portrait - 600 x 400"}
              </h3>
              <StarRating rating={4} />
            </Link>
            <div className="pt-4 flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900">
                ${price ?? 600}
              </span>
              <div className="flex items-center justify-center">
                <Link
                  to={`products/${handle}`}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-1.5 px-[0.75rem] text-center bg-blue-600"
                >
                  View
                </Link>
                <div className="p-[0.15rem]"></div>
                <Link
                  to={`products/${handle}`}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-1.5 px-[0.75rem] text-center"
                >
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductCardSmall;

// Move method outside so it isnt recreated for each component
const getStarsForRating = (rating: number) => {
  if (rating < 1 || rating > 5) {
    rating = 5;
  }
  return Array.from(Array(rating).keys()).map((val) => (
    <svg
      key={val}
      className="w-5 h-5 text-yellow-300"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
    </svg>
  ));
};

export const StarRating = ({ rating = 5 }: { rating?: number }) => {
  if (rating === 0) {
    rating = 1;
  }
  return (
    <div className="flex items-center mt-2.5 mb-5">
      {getStarsForRating(rating)}
      <span className="bg-blue-400 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-sm ml-3">
        {rating}.0
      </span>
    </div>
  );
};
