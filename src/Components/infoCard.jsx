import { Text } from "@chakra-ui/core";
import React, { useEffect, useState } from "react";
import { Balance, IconWrapper, InfoMoney, MoneyCard, Wrapper } from "../styles";
import {
  darkBlue,
  darkGreen,
  darkRed,
  lightBlue,
  lightGreen,
  lightRed,
} from "../styles/colors";

export default function InfoCard({ devise, type, color, money, children }) {
  const [bgColor, setBgColor] = useState(lightBlue);
  const [mainColor, setMainColor] = useState(darkBlue);

  useEffect(() => {
    const getColor = () => {
      switch (color) {
        case "red":
          setBgColor(lightRed);
          setMainColor(darkRed);
          break;
        case "green":
          setBgColor(lightGreen);
          setMainColor(darkGreen);
          break;
        case "blue":
          setBgColor(lightBlue);
          setMainColor(darkBlue);
          break;
        default:
          break;
      }
    };
    getColor();
  }, [color]);

  return (
    <MoneyCard>
      <IconWrapper bg={bgColor}>{children}</IconWrapper>
      <Wrapper>
        <Balance color={mainColor}>
          {money}
          <Text as="span" ml="3px">
            {devise}
          </Text>
        </Balance>
        <InfoMoney>{type}</InfoMoney>
      </Wrapper>
    </MoneyCard>
  );
}
