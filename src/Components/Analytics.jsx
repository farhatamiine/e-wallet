import React from "react";
import { Bar } from "react-chartjs-2";
import { ChartWrapper, Header1 } from "../styles";
import { darkBlue, darkGreen, darkRed } from "../styles/colors";
export function Analytics() {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Balance",
        backgroundColor: darkBlue,
        borderColor: darkBlue,
        data: [
          1235,
          4500,
          6000,
          4000,
          3200,
          4580,
          6080,
          4500,
          6000,
          4000,
          3200,
          4580,
        ],
      },
      {
        label: "Income",
        backgroundColor: darkGreen,
        borderColor: darkGreen,
        data: [
          1200,
          1500,
          1325,
          1452,
          3520,
          4852,
          3025,
          1325,
          1452,
          3520,
          4852,
          4852,
        ],
      },
      {
        label: "Expance",
        backgroundColor: darkRed,
        borderColor: darkRed,
        data: [
          1720,
          1522,
          325,
          4520,
          1325,
          4852,
          2000,
          1522,
          325,
          4520,
          1325,
          4852,
        ],
      },
    ],
  };
  const legend = {
    display: true,
    fullWidth: true,
    position: "bottom",
    reverse: true,
  };
  return (
    <ChartWrapper>
      <Header1>Analytics</Header1>
      <Bar data={data} legend={legend} />
    </ChartWrapper>
  );
}
