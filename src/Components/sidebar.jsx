import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { BiTransferAlt } from "react-icons/bi";
import { GiStairsGoal } from "react-icons/gi";
import { RiDashboardFill } from "react-icons/ri";
import { TiChartBar } from "react-icons/ti";
import logo from "../assets/logo.png";
import { Aside, Logo, SideBarLink } from "../styles";

export default function SideBar() {
  return (
    <Aside>
      <Logo src={logo} alt="logo" />
      <SideBarLink to="/">
        <RiDashboardFill /> Dashboard
      </SideBarLink>
      <SideBarLink to="/transaction">
        <BiTransferAlt />
        Transaction
      </SideBarLink>
      <SideBarLink to="/report">
        <TiChartBar />
        Report
      </SideBarLink>
      <SideBarLink to="/goal">
        <GiStairsGoal />
        Goal
      </SideBarLink>
      <SideBarLink to="/setting">
        <AiFillSetting />
        Setting
      </SideBarLink>
    </Aside>
  );
}
