import React from "react";
import {
  Header2,
  IconWrapper,
  InfoWrapper,
  MonthlyCard,
  MontlyText,
  ProgressTitle,
} from "../styles";
import ProgressBar from "../utils/ProgressBar";

export default function MonthlySpend({
  bgColor,
  children,
  title,
  about,
  percantage,
  color,
}) {
  return (
    <MonthlyCard>
      <IconWrapper bg={bgColor}>{children}</IconWrapper>
      <MontlyText>
        <InfoWrapper>
          <Header2>{about}</Header2>
          <ProgressTitle>{title}</ProgressTitle>
        </InfoWrapper>
        <ProgressBar
          bgColor={bgColor}
          height="10px"
          percantage={percantage}
          color={color}
        />
      </MontlyText>
    </MonthlyCard>
  );
}
