import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Cardapio: React.FC = () => {
  const menuCategories = [
    {
      id: 0,
      name: "Aperitivos",
    },
    {
      id: 1,
      name: "Massa",
    },
    {
      id: 2,
      name: "Pizza",
    },
    {
      id: 3,
      name: "Salada",
    },
    {
      id: 4,
      name: "Sopa",
    },
    {
      id: 5,
      name: "Sobremesa",
    },
  ];

  return (
    <Flex
      my="80px"
      direction="column"
      align="center"
      textAlign="center"
      gap="24px"
    >
      <Text as='h1'>Cardapio</Text>
      <Text as='p' maxW='570px'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure molestiae
        facilis accusantium omnis, odit corrupti laboriosam expedita saepe iste
        illum id quae. Quos, consectetur. Aspernatur, praesentium. Inventore
        quibusdam tempore autem?
      </Text>
      <Flex gap="38px">
        {menuCategories.map((category) => (
          <Flex key={category.id} direction="column">
            <Text color="#36392D" fontWeight={600} fontSize="16px">
              {category.name}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default Cardapio;
