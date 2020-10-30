import { Box } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  headerTextColor,
  lightBlue,
  secondaryTextColor,
  textColor,
} from "./colors";

export const SideBarLink = styled(NavLink)`
  color: #9199a1;
  font-size: 18px;
  text-decoration: none;
  background-color: #ffff;
  margin: 10px 0px;
  padding: 10px 25px;
  height: 60px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 100%;
  &:hover {
    color: rgba(19, 174, 255, 1);
  }
`;

export const Logo = styled.img`
  width: 60%;
  height: auto;
  background-color: #ffff;
  display: flex;
  margin: 0 auto;
`;

const Header = styled.h1`
  color: ${headerTextColor};
  font-weight: 900;
  height: auto;
`;

export const Header1 = styled(Header)`
  color: ${headerTextColor};
  text-transform: capitalize;
  font-size: 25px;
  margin: 5px 0;
`;
export const Header2 = styled(Header)`
  color: ${headerTextColor};
  font-size: 18px;
  text-transform: capitalize;
  font-weight: 800;
`;

export const Text = styled.p`
  color: ${textColor};
  cursor: pointer;
  font-size: 18px;
`;

export const MoneyCard = styled.div`
  width: 235px;
  height: 100px;
  border-radius: 10px;
  padding: 0 20px;
  margin: 15px 10px 0;
  background-color: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.03),
    0 4px 6px -2px rgba(0, 0, 0, 0.03) !important;
  display: flex;
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05),
      0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
    cursor: pointer;
  }
  &:last-child {
    margin-right: 0;
  }
  &:first-child {
    margin-left: 0;
  }
  align-items: center;
  justify-content: space-between;
`;
export const Balance = styled(Text)`
  color: ${(props) => (props.color === null ? lightBlue : props.color)};
  font-weight: bold;
  font-size: 25px;
  text-align: left;
`;
export const InfoMoney = styled(Text)`
  text-align: right;
  font-size: 12px;
  font-weight: bold;
  color: ${secondaryTextColor};
`;

export const SecondaryText = styled.p`
  color: ${secondaryTextColor};
  cursor: pointer;
  font-weight: 500;
  font-size: 15px;
`;
export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  overflow: hidden;
  background-color: #ffff;
  align-items: flex-start;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
  height: 100%;
  width: 240px;
`;
export const ProgressTitle = styled(InfoMoney)`
  text-align: right;
  color: #000;
  font-size: 15px;
`;

export const Main = styled.div`
  background-color: #f9fbfd;
  padding: 18px 15px;
  width: auto;
  position: relative;
  overflow: hidden;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  z-index: 1;
  margin-left: 240px;
`;
export const TransactionMain = styled(Main)`
  flex-direction: column;
`;
export const Wrapper = styled.div``;

export const ProgressWrapper = styled(Wrapper)`
  background-color: ${(props) =>
    props.color === null ? lightBlue : props.color};
  border-radius: 10px;
`;
export const Form = styled.form`
  width: 100%;
`;
export const Progress = styled(Wrapper)`
  height: ${(props) => (props.height === null ? "24px" : props.height)};
  border-radius: 10px;

  background-color: ${(props) =>
    props.color === null ? lightBlue : props.color};
  width: ${(props) =>
    props.percantage === null ? "50%" : props.percantage + "%"}; ;
`;

export const MonthlyCard = styled(Wrapper)`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
  margin: 10px 0;
  align-items: center;
  height: 80px;
`;
export const MontlyText = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 10px;
  width: 100%;
`;

export const Container = styled(Wrapper)`
  width: 750px;
`;
export const CardWrapper = styled(Wrapper)`
  display: flex;
  justify-content: flex-start;
`;
export const ChartWrapper = styled(Wrapper)`
  width: auto;
  box-sizing: border-box;
  border: 1px solid #ebebebeb;
  margin-top: 15px;
  background-color: #ffffff;
  padding: 7px 10px;
  border-radius: 10px;
`;
export const SideContainer = styled(Wrapper)`
  height: 100%;
  padding: 0 10px;
  width: 100%;
`;
export const IconWrapper = styled(Wrapper)`
  border-radius: 10px;
  width: 60px;
  padding: 5px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.bg === null ? lightBlue : props.bg)};
  svg {
    margin: 0;
  }
`;

export const InfoWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

//! Login Style
export const LoginWrapper = styled(Wrapper)`
  background-color: ${lightBlue};
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const FormContainer = styled(Box)`
  width: 450px;
  height: 500px;
  padding: 20px 30px;
  background-color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
export const FormTransaction = styled(FormContainer)`
  height: 300px;
`;

export const InputWrapper = styled(Wrapper)`
  width: 100%;
  margin-bottom: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;

  &:focus {
    border: 2px solid dodgerblue;
  }
`;
