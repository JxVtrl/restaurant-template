import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Events: React.FC = () => {
  return (
    <Flex  py='80px'>
      <Flex maxW="1462px" w="100%" m="0 auto">
        <Text
          fontWeight={700}
          fontSize={64}
          color="#36392D"
        >Events</Text>
      </Flex>
    </Flex>
  );
};

export default Events;
