import { Typography } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import logo from "../../assets/logo.svg";
import { userLogoutAction } from "../../redux/actionsUser";
import { useDispatch } from "react-redux";

const SideBarEUA = () => {
  const [ collapsedBar, setCollapsedBar ] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

const handleCollapsed = () => {
  if(collapsedBar === false) {setCollapsedBar(true)} 
  if(collapsedBar === true) {setCollapsedBar(false)} 
}

const handleLogout = async (event) => {
  event.preventDefault();
dispatch(userLogoutAction())
navigate("/");
window.location.reload(true);
}
  return (
    // <Box>
      <Sidebar rootStyles={{ minHeight: "100vh", fontSize: ".9em", boxShadow:" 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)"}} collapsed={collapsedBar}>
        <Menu>
        <MenuItem icon={<MenuRoundedIcon />} onClick={handleCollapsed} rootStyles={{ color: "#00bcd4", marginTop: "1em" }} ></MenuItem>
        </Menu>
        <Menu
          rootStyles={{ marginTop: "1em" }}
          menuItemStyles={{
            button: {
              [`&.active`]: {
                // backgroundColor: "#B2EBF2",
                color: "#B2EBF2",
              },
            },
          }}
        >
          <MenuItem icon={<AdminPanelSettingsRoundedIcon/>} component={<Link to="/ua/profile" />}   rootStyles={{ color: "grey" }}> <Typography
              sx={{
                color: "black",
                fontSize: "1em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
              EUA
            </Typography> </MenuItem>
       
          <MenuItem icon={<img src={logo} alt="logo" className="logo-sidebar" />} component={<Link to="/" />} rootStyles={{ justifyContent: "center", marginTop: "6em" }}><h3>iPunto</h3></MenuItem>

        </Menu>
        <Menu rootStyles={{ marginTop:"4em"}}>
          <MenuItem icon={<ExitToAppRoundedIcon />} component={<Link to="/" />} onClick={handleLogout} > Salir </MenuItem>
        </Menu>
      </Sidebar>
    // </Box>
  );
};
SideBarEUA.displaName = "SideBar";
export default SideBarEUA;