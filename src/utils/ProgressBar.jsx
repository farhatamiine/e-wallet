import React from "react";
import { Progress, ProgressTitle, ProgressWrapper } from "../styles";

export default function ProgressBar({
  height,
  percantage,
  title,
  bgColor,
  color,
}) {
  return (
    <>
      <ProgressTitle>{title}</ProgressTitle>
      <ProgressWrapper color={bgColor}>
        <Progress
          color={color}
          height={height}
          percantage={percantage}
        ></Progress>
      </ProgressWrapper>
    </>
  );
}
