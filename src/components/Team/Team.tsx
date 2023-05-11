import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { TeamCarousel } from "../TeamCarousel";
import { useDevice } from "../../hooks/useDevice";

const Team: React.FC = () => {
  const { isMobile } = useDevice();

  return (
    <Flex
      w="100%"
      justify="center"
      bgColor="#B7BCA9"
      py="80px"
      direction="column"
    >
      <Flex
        justify="space-between"
        align="flex-start"
        maxW="1462px"
        w="100%"
        m="0 auto 120px"
        direction={isMobile ? "column" : "row"}
      >
        <Text
          fontWeight={700}
          fontSize="64px"
          lineHeight="64px"
          color="#36392D"
        >
          Nossa equipe
        </Text>
        <Text
          maxW="570px"
          fontWeight={400}
          fontSize="18px"
          lineHeight="29px"
          color="#36392D"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          possimus quis officia porro iusto ipsam quae omnis.
        </Text>
      </Flex>
      <TeamCarousel />
    </Flex>
  );
};

export default Team;
