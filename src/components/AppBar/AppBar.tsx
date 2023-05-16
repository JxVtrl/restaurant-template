import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import React from "react";

import * as S from "./AppBar.styles";
import { useDevice } from "../../hooks/useDevice";

const AppBar: React.FC = () => {
  const { isMobile } = useDevice();
  return (
    <Flex justify="space-around" py="42px">
      <S.AppBarSide>
        <HamburgerIcon boxSize="40px" cursor="pointer" />
        {isMobile || (
          <>
            <S.AppBarText>Cardápio</S.AppBarText>
            <S.AppBarText>Equipe</S.AppBarText>
          </>
        )}
      </S.AppBarSide>
      <S.AppBarTitle>Sua empresa</S.AppBarTitle>
      <S.AppBarSide>
        {isMobile || (
          <>
            <S.AppBarText>Eventos</S.AppBarText>
            <S.AppBarText>Contato</S.AppBarText>
          </>
        )}
      </S.AppBarSide>
    </Flex>
  );
};

export default AppBar;
