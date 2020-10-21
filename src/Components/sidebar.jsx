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
      <SideBarLink>
        <RiDashboardFill /> Dashboard
      </SideBarLink>
      <SideBarLink>
        <BiTransferAlt />
        Transaction
      </SideBarLink>
      <SideBarLink>
        <TiChartBar />
        Report
      </SideBarLink>
      <SideBarLink>
        <GiStairsGoal />
        Goal
      </SideBarLink>
      <SideBarLink>
        <AiFillSetting />
        Setting
      </SideBarLink>
    </Aside>
  );
}
