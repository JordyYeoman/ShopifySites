import React from "react";
import IntersectionObserverWrapper from "./utils/IntersectionObserverWrapper";

function Hero() {
  return (
    <div className="h-[70vh] w-full flex">
      <div className="h-full w-1/2 bg-red-200"></div>
      <div className="h-full w-1/2 bg-green-200 flex flex-col justify-center">
        <div className="text-black pl-16">
          <IntersectionObserverWrapper duration={"duration-500"}>
            <div className="text-6xl font-bold">Latest Pieces</div>
            <div className="text-xl font-normal pt-2 max-w-lg">
              If you are going to use a passage of Lorem Ipsum, you need to be
              sure there isn't anything embarrassing hidden in the middle of
              text.
            </div>
            <div className="cursor-pointer hover:scale-95 transition duration-300 text-xl font-normal px-8 py-2 mt-6 bg-yellow-200 w-fit rounded">
              Find out more
            </div>
          </IntersectionObserverWrapper>
        </div>
      </div>
    </div>
  );
}

export default Hero;
