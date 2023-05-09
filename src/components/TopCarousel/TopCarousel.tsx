import { Flex, Image } from "@chakra-ui/react";
import React from "react";

import Image1 from "../../assets/images/TopCarousel-1.png";
import Image2 from "../../assets/images/TopCarousel-2.png";
import Image3 from "../../assets/images/TopCarousel-3.png";
import Image4 from "../../assets/images/TopCarousel-4.png";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

SwiperCore.use([Autoplay]);

const TopCarousel: React.FC = () => {
  const carouselData = [
    {
      id: 0,
      alt: "Imagem 1",
      image: Image1,
    },
    {
      id: 1,
      alt: "Imagem 2",
      image: Image2,
    },
    {
      id: 2,
      alt: "Imagem 3",
      image: Image3,
    },
    {
      id: 3,
      alt: "Imagem 4",
      image: Image4,
    },
    {
      id: 4,
      alt: "Imagem 1",
      image: Image1,
    },
    {
      id: 5,
      alt: "Imagem 2",
      image: Image2,
    },
    {
      id: 6,
      alt: "Imagem 3",
      image: Image3,
    },
    {
      id: 7,
      alt: "Imagem 4",
      image: Image4,
    },
  ];

  return (
    <>
      <Flex mb='80px'  ml="80px" gap='24px'>
        <Flex cursor='pointer' w="64px" h="64px" border="1px solid #36392D" borderRadius="50px" align='center' justify='center'>
          <ArrowBackIcon />
        </Flex>
        <Flex cursor='pointer' w="64px" h="64px" border="1px solid #36392D" borderRadius="50px" align='center' justify='center'>
          <ArrowForwardIcon />
        </Flex>
      </Flex>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={3.4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {carouselData.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              maxH="433px"
              objectFit="cover"
              w="100%"
              src={item.image}
              alt={item.alt}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TopCarousel;
