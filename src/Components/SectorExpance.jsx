import React from "react";
import { Doughnut } from "react-chartjs-2";
import { ChartWrapper, Header2 } from "../styles";
import { darkBlue, darkGreen, darkRed } from "../styles/colors";

export default function SectorExpance() {
  const data = {
    labels: ["Hobbies", "Transport", "Shopping"],
    datasets: [
      {
        data: [300, 150, 100],
        backgroundColor: [darkBlue, darkGreen, darkRed],
        hoverBackgroundColor: [darkBlue, darkGreen, darkRed],
      },
    ],
  };
  return (
    <ChartWrapper>
      <Header2>Sector Expance</Header2>
      <Doughnut data={data} />
    </ChartWrapper>
  );
}
