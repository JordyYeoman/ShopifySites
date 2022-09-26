import { Link } from "gatsby";
import React from "react";
import IntersectionObserverWrapper from "./utils/IntersectionObserverWrapper";

function SingleFeatureProduct() {
  return (
    <>
      <div className="min-w-screen min-h-screen bg-blue-300 flex justify-center items-center p-5 py-10 lg:p-10 overflow-hidden relative">
        <IntersectionObserverWrapper duration={"duration-1000"}>
          <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
            <div className="md:flex items-center -mx-10">
              <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                  <img
                    // Temporary
                    src="https://i.etsystatic.com/22785252/r/il/bc7b4c/3370790004/il_570xN.3370790004_keov.jpg"
                    className="w-full relative z-10"
                    alt=""
                  />
                  <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                  <h1 className="font-bold uppercase text-2xl mb-5">
                    Digital Bestfriend <br />
                    Dog Portraits
                  </h1>
                  <p className="text-sm">
                    Nothing better to appreciate your pet with than a portrait.
                    Enjoy seeing your best friend preserved through time on a
                    canvas, oil painting, drawing or even digital art!
                  </p>
                </div>
                <div>
                  <div className="inline-block align-bottom mr-5">
                    <span className="text-2xl leading-none align-baseline">
                      $
                    </span>
                    <span className="font-bold text-5xl leading-none align-baseline">
                      199
                    </span>
                    <span className="text-2xl leading-none align-baseline">
                      .99
                    </span>
                  </div>
                  <div className="inline-block align-bottom">
                    <Link to="/">
                      <button className="bg-blue-300 opacity-75 hover:opacity-100 text-blue-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                        <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </IntersectionObserverWrapper>
      </div>
    </>
  );
}

export default SingleFeatureProduct;
