import { Flex, Image } from "@chakra-ui/react";
import React from "react";

import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { banners } from "../../data/banner";
import { useDevice } from "../../hooks/useDevice";

SwiperCore.use([Autoplay]);

const TopCarousel: React.FC = () => {
  const { isMobile } = useDevice();
  return (
    <>
      {isMobile || (
        <Flex mb="40px" ml="80px" gap="24px" maxW="1462px" w="100%">
          <Flex
            cursor="pointer"
            w="64px"
            h="64px"
            border="1px solid #36392D"
            borderRadius="50px"
            align="center"
            justify="center"
          >
            <ArrowBackIcon />
          </Flex>
          <Flex
            cursor="pointer"
            w="64px"
            h="64px"
            border="1px solid #36392D"
            borderRadius="50px"
            align="center"
            justify="center"
          >
            <ArrowForwardIcon />
          </Flex>
        </Flex>
      )}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={isMobile ? 1 : 3.4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {banners.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              h="433px"
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
