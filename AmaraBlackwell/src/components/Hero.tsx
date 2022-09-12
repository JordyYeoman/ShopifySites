import { Link } from "gatsby"
import React from "react"
import GumtreeLeaves from "../assets/icons/Gumtree-leaves.svg"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { Pagination, Navigation } from "swiper"
import ChevronRightArrow from "../assets/icons/Chevron-right.svg"
import ChevronLeftArrow from "../assets/icons/Chevron-left.svg"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const DefaultButton = ({
  buttonText,
  buttonLink,
}: {
  buttonText: string
  buttonLink: string
}) => {
  return (
    <>
      <Link className="bg-blue-200 rounded mt-8 py-2 px-8" to={buttonLink}>
        {buttonText}
      </Link>
    </>
  )
}

const FeatureProductImages = [
  {
    name: "Product1",
    alt: "Product1",
    featureImage:
      "https://images.pexels.com/photos/1964471/pexels-photo-1964471.jpeg?auto=compress&cs=tinysrgb",
  },
  {
    name: "Product2",
    alt: "Product2",
    featureImage:
      "https://images.pexels.com/photos/7004697/pexels-photo-7004697.jpeg?auto=compress",
  },
  {
    name: "Product3",
    alt: "Product3",
    featureImage:
      "https://images.pexels.com/photos/2326936/pexels-photo-2326936.jpeg?auto=compress",
  },
  {
    name: "Product4",
    alt: "Product4",
    featureImage:
      "https://images.pexels.com/photos/10163765/pexels-photo-10163765.jpeg?auto=compress",
  },
  {
    name: "Product5",
    alt: "Product5",
    featureImage:
      "https://images.pexels.com/photos/7118184/pexels-photo-7118184.jpeg?auto=compress",
  },
]

const SwiperNextButton = () => {
  const swiperHook = useSwiper()
  return (
    <div
      onClick={() => {
        swiperHook.slideNext()
      }}
    >
      <ChevronRightArrow className="w-5 h-5 p-4 mr-8 bg-red-200 rounded-full" />
    </div>
  )
}
const SwiperPrevButton = () => {
  const swiperHook = useSwiper()
  return (
    <div
      onClick={() => {
        swiperHook.slidePrev()
      }}
    >
      <ChevronLeftArrow className="w-5 h-5 p-4 ml-8 bg-red-200 rounded-full" />
    </div>
  )
}

const NavigationArrows = () => {
  return (
    <div className="flex flex-row justify-center items-center bottom-8 right-8 z-10 absolute">
      <SwiperNextButton />
      <SwiperPrevButton />
    </div>
  )
}

function Hero() {
  return (
    <div className="flex flex-row h-[80vh] w-full">
      <div className="w-6/12 h-full">
        <Swiper
          className="h-full w-full"
          pagination={true}
          navigation={true}
          loop={true}
          modules={[Pagination, Navigation]}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={swiper => console.log(swiper)}
        >
          <NavigationArrows />
          {FeatureProductImages.map(featureProduct => {
            return (
              <SwiperSlide key={featureProduct.name}>
                <img
                  className="w-full h-full object-cover"
                  alt={featureProduct.alt}
                  src={featureProduct.featureImage}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="w-6/12 h-full relative overflow-hidden">
        <GumtreeLeaves className="absolute -top-24 -right-10 w-96 h-96 opacity-10" />
        <div className="h-full w-full justify-center items-start flex flex-col pl-10">
          <div className="text-8xl uppercase text-bold font-serif pb-4">
            New <br></br>Releases
          </div>
          <div className="uppercase max-w-lg">
            Donec dictum vehicula justo. Cras porta magna neque, in lobortis
            erat interdum at. Nam ac ultricies ligula, a finibus lectus.
            Curabitur egestas aliquam nulla eu elementum. Donec maximus ante nec
            cursus ultrices. In hac habitasse platea dictumst. Cras rhoncus
            placerat arcu, scelerisque aliquet risus sagittis vel.
          </div>
          <DefaultButton buttonText={"Shop Now"} buttonLink={"/"} />
        </div>
      </div>
    </div>
  )
}

export default Hero
