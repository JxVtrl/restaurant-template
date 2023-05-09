import { Flex } from "@chakra-ui/react";
import React from "react";

import * as S from "./TopTexts.styles";

const TopTexts: React.FC = () => {
  return (
    <Flex justify="space-around	" align="center" py='80px'>
      <S.TopTextsTitle>Quem nós somos?</S.TopTextsTitle>
      <S.TopTextsSubtitle>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, sequi.
        Soluta qui nulla ipsum eveniet blanditiis in, unde ea. Neque harum eos
        maiores cum sunt magni in sint nemo et. Mollitia eos, suscipit cum vero
        veniam sed necessitatibus error perspiciatis eligendi corporis delectus,
        dolore illo officia, culpa repellat sit et ut consequuntur quibusdam
        natus labore in provident veritatis voluptatibus. Sequi.
      </S.TopTextsSubtitle>
    </Flex>
  );
};

export default TopTexts;
