import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Image, Text, Flex } from "@chakra-ui/react";
import { team } from "../../data";
import { useDevice } from "../../hooks/useDevice";

SwiperCore.use([Autoplay]);

const TeamCarousel: React.FC = () => {
  const { isMobile } = useDevice();

  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={40}
      slidesPerView={isMobile ? 1:4}
      loop={true}
      autoplay={{
        delay: 6500,
        disableOnInteraction: false,
      }}
      style={{
        width: "100%",
        maxWidth: "1464px",
        height: "705px",
      }}
    >
      {team.map((item) => (
        <SwiperSlide key={item.id} style={{ width: "fit-content" }}>
          <Image
            h="485px"
            objectFit="cover"
            objectPosition={"center"}
            src={item.image}
            alt={item.name}
            w="100%"
          />
          <Flex direction="column" gap='16px' mt='16px'>
            <Text
              textAlign="center"
              fontWeight={700}
              fontSize={20}
              color="#36392D"
            >
              {item.name}
            </Text>
            <Text
              textAlign="center"
              fontWeight={600}
              fontSize={16}
              color="#36392D"
            >
              {item.title}
            </Text>
            <Text
              textAlign="center"
              fontWeight={600}
              fontSize={16}
              color="#36392D"
            >
              {item.description}
            </Text>
          </Flex>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamCarousel;
