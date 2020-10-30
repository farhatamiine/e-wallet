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
      <SideBarLink activeClassName="active" to="/dashboard">
        <RiDashboardFill /> Dashboard
      </SideBarLink>
      <SideBarLink activeClassName="active" to="/transaction">
        <BiTransferAlt />
        Transaction
      </SideBarLink>
      <SideBarLink activeClassName="active" to="/report">
        <TiChartBar />
        Report
      </SideBarLink>
      <SideBarLink activeClassName="active" to="/goal">
        <GiStairsGoal />
        Goal
      </SideBarLink>
      <SideBarLink activeClassName="active" to="/setting">
        <AiFillSetting />
        Setting
      </SideBarLink>
    </Aside>
  );
}
