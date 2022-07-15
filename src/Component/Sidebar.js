import React, { useState } from "react";
import "./Sidebar.css"
import "react-pro-sidebar/dist/css/styles.css";

import {MdOutlineIntegrationInstructions} from "react-icons/md";
import {MdOutlineAppRegistration} from "react-icons/md";
import {FaVoteYea} from "react-icons/fa";
import {AiOutlineSolution} from "react-icons/ai";
import {AiOutlineLogout} from "react-icons/ai";
import {FiArrowLeftCircle, FiArrowRightCircle} from "react-icons/fi";

import { MenuItem, ProSidebar, SidebarContent , Menu , SidebarFooter , SidebarHeader} from "react-pro-sidebar";
 

const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false)

  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };
  return (
    <>
      <div id = "sidebar">
        <ProSidebar collapsed={menuCollapse}>
         
         <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? " " : "E-Vote"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
          <Menu iconShape="square">
              <MenuItem active={true} icon={<MdOutlineIntegrationInstructions />}>
                Instruction
              </MenuItem>
              <MenuItem icon={<MdOutlineAppRegistration />}> Voter Registration </MenuItem>
              <MenuItem icon={<FaVoteYea />}> Voting Area  </MenuItem>
              <MenuItem icon={<AiOutlineSolution />}> Result </MenuItem>
              
              </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={< AiOutlineLogout/>}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
   </>

  );
}

export default Sidebar;