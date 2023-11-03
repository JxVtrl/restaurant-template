import { Divider, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import SwiperCore, { Autoplay} from "swiper";
import  { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useApp } from "../../context/AppContext";

import {
  appetizers,
  pastas,
  pizzas,
  salads,
  soups,
  desserts,
  wines,
  cocktails,
  beers,
} from "../../data";
import { useDevice } from "../../hooks/useDevice";

SwiperCore.use([Autoplay]);

const CardapioCarousel: React.FC = () => {
  const { isMobile } = useDevice();
  const { menuType, drinksType, drinksCategories, setDrinksType } = useApp();
  const [menuCarousel, setMenuCarousel] = useState<
    {
      id: number;
      alt: string;
      image: string;
      title: string;
      value: number;
    }[]
  >([]);

  const [drinksCarousel, setDrinksCarousel] = useState<
    {
      id: number;
      alt: string;
      image: string;
      title: string;
      value: number;
    }[]
  >([]);

  useEffect(() => {
    switch (menuType) {
      case "Appetizer":
        setMenuCarousel(appetizers);
        break;
      case "Pasta":
        setMenuCarousel(pastas);
        break;
      case "Pizza":
        setMenuCarousel(pizzas);
        break;
      case "Salad":
        setMenuCarousel(salads);
        break;
      case "Soup":
        setMenuCarousel(soups);
        break;
      case "Dessert":
        setMenuCarousel(desserts);
        break;
      default:
        setMenuCarousel(appetizers);
        break;
    }
  }, [menuType]);

  useEffect(() => {
    switch (drinksType) {
      case "Wine":
        setDrinksCarousel(wines);
        break;
      case "Cocktail":
        setDrinksCarousel(cocktails);
        break;
      case "Beer":
        setDrinksCarousel(beers);
        break;
      default:
        setDrinksCarousel(wines);
        break;
    }
  }, [drinksType]);

  return (
    <>
      <Flex mb="80px" w='100%'>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={isMobile ? 1 : 3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          style={{
            width: "100%",
            maxWidth: "1464px",
            height: "569px",
          }}
        >
          {menuCarousel.map((item) => (
            <SwiperSlide key={item.id} style={{ width: "fit-content" }}>
              <Image
                h="485px"
                objectFit="cover"
                objectPosition={"center"}
                src={item.image}
                alt={item.alt}
                w="100%"
              />
              <Text
                textAlign="center"
                my="16px"
                fontWeight={700}
                fontSize={20}
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
                ${item.value}
              </Text>
            </SwiperSlide>
          ))}
        </Swiper>
      </Flex>

      <Flex mb="80px" w="100%" maxW="1464px" justify="space-between">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
          style={{
            width: "100%",
            maxWidth: "570px",
            height: "860px",
            margin: 0,
          }}
        >
          {drinksCarousel.map((item) => (
            <SwiperSlide key={item.id} style={{ width: "fit-content" }}>
              <Image
                h="760px"
                objectFit="cover"
                objectPosition={"center"}
                src={item.image}
                alt={item.alt}
                w="100%"
              />
              <Text
                textAlign="left"
                my="16px"
                fontWeight={700}
                fontSize={20}
                color="#36392D"
              >
                {item.title}
              </Text>
              <Text
                textAlign="left"
                fontWeight={600}
                fontSize={16}
                color="#36392D"
              >
                ${item.value}
              </Text>
            </SwiperSlide>
          ))}
        </Swiper>
        <Flex direction="column" maxW="570px" w="100%">
          {drinksCategories.map((item, index) => (
            <>
              <Flex
                py="40px"
                onClick={() => setDrinksType(item.drinksType)}
                cursor="pointer"
              >
                <Text
                  fontWeight={700}
                  fontSize={64}
                  color={drinksType === item.drinksType ? "#36392D" : "#9FA68C"}
                  transition="all 0.2s"
                  _hover={{
                    color: "#36392D",
                  }}
                >
                  {item.name}
                </Text>
              </Flex>
              {index !== drinksCategories.length - 1 && <Divider />}
            </>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default CardapioCarousel;
