import React from "react";
import { AiFillShopping } from "react-icons/ai";
import { GiBodyBalance, GiCityCar } from "react-icons/gi";
import { IoIosWallet } from "react-icons/io";
import { TiArrowDownThick, TiArrowUpThick } from "react-icons/ti";
import {
  CardWrapper,
  Container,
  Header1,
  Header2,
  Main,
  SideContainer,
} from "../styles";
import {
  darkBlue,
  darkGreen,
  darkRed,
  lightBlue,
  lightGreen,
  lightRed,
} from "../styles/colors";
import { Analytics } from "../Components/Analytics";
import InfoCard from "../Components/infoCard";
import MonthlySpend from "../Components/MonthlySpend";
import SectorExpance from "../Components/SectorExpance";
export default function Dashboard() {
  return (
    <Main>
      <Container>
        <Header1>Financial Overview</Header1>
        <Header2>My Balance</Header2>
        <CardWrapper>
          <InfoCard type="balance" money="4353" color="blue" devise="$">
            <IoIosWallet size={40} color={darkBlue} />
          </InfoCard>
          <InfoCard type="Income" money="2504" color="green" devise="$">
            <TiArrowUpThick size={40} color={darkGreen} />
          </InfoCard>
          <InfoCard type="Expances" money="1235" color="red" devise="$">
            <TiArrowDownThick size={40} color={darkRed} />
          </InfoCard>
        </CardWrapper>
        <Analytics />
      </Container>
      <SideContainer>
        <Header1>Monthly spend limit</Header1>
        <MonthlySpend
          bgColor={lightBlue}
          color={darkBlue}
          title="250$"
          percantage="80"
          about="Hobbies"
        >
          <GiBodyBalance size={40} color={darkBlue} />
        </MonthlySpend>
        <MonthlySpend
          bgColor={lightGreen}
          color={darkGreen}
          title="450$"
          percantage="50"
          about="Transport"
        >
          <GiCityCar size={40} color={darkGreen} />
        </MonthlySpend>
        <MonthlySpend
          percantage="20"
          color={darkRed}
          about="Shopping"
          bgColor={lightRed}
          title="350$"
        >
          <AiFillShopping size={40} color={darkRed} />
        </MonthlySpend>
        <SectorExpance />
      </SideContainer>
    </Main>
  );
}
