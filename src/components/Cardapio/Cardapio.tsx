import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { CardapioCarousel } from "../CardapioCarousel";
import { useApp } from "../../context/AppContext";
import { useDevice } from "../../hooks/useDevice";

const Cardapio: React.FC = () => {
  const { isMobile } = useDevice();
  const { menuType, menuCategories, setMenuType } = useApp();

  return (
    <Flex direction="column" align="center" my="80px" gap="40px">
      <Flex
        textAlign="center"
        gap="24px"
        direction="column"
        align="center"
        px={isMobile ? "64px" : undefined}
        overflow="hidden"
        w="100%"
      >
        <Text
          as="h1"
          fontWeight={700}
          fontSize="64px"
          lineHeight="64px"
          color="#36392D"
        >
          Cardapio
        </Text>
        <Text as="p" maxW="570px">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          molestiae facilis accusantium omnis, odit corrupti laboriosam expedita
          saepe iste illum id quae. Quos, consectetur. Aspernatur, praesentium.
          Inventore quibusdam tempore autem?
        </Text>
        <Flex
          gap="38px"
          flexWrap="wrap"
          justify={isMobile ? "center" : undefined}
        >
          {menuCategories.map((category) => (
            <Flex
              key={category.id}
              direction="column"
              border="1px solid #B7BCA9"
              p="16px 40px"
              borderRadius="16px"
              cursor="pointer"
              transition="all 0.2s"
              w={isMobile ?'180px' :undefined}
              backgroundColor={
                menuType === category.menuType ? "#B7BCA9" : "transparent"
              }
              _hover={{
                background: "#B7BCA9",
                color: "#fff",
              }}
              onClick={() =>
                menuType !== category.name && setMenuType(category.menuType)
              }
            >
              <Text
                color={menuType === category.menuType ? "#fff" : "#36392D"}
                fontWeight={600}
                fontSize="16px"
              >
                {category.name}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <CardapioCarousel />
    </Flex>
  );
};

export default Cardapio;
