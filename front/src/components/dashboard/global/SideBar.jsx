import { Typography } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import logo from "../../../assets/logo.svg";
import { userLogoutAction } from "../../../redux/actionsUser";
import { useDispatch } from "react-redux";

const SidebarMenu = () => {
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
                color: "#4dd0e1",
              },
            },
          }}
        >
          <MenuItem icon={<AdminPanelSettingsRoundedIcon/>} component={<Link to="/ua/landing" />}   rootStyles={{ color: "grey" }}> <Typography
              sx={{
                color: "grey",
                fontSize: "1em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
              Home Admin
            </Typography> </MenuItem>
          <MenuItem icon={<AppsRoundedIcon/>} component={<Link to="/ua/product/catalogo" />} ><Typography
              sx={{
                color: "grey",
                fontSize: "1em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
               Catálogo
            </Typography></MenuItem>
          <MenuItem icon={<ListRoundedIcon/>} component={<Link to="/ua/product/inventory"  />}><Typography
              sx={{
                color: "grey",
                fontSize: "1em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
               Inventario
            </Typography></MenuItem>
          <MenuItem icon={<AutoFixHighRoundedIcon/>} component={<Link to="/ua/product/edit" />}><Typography
              sx={{
                color: "grey",
                fontSize: "1em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
               Editar Producto
            </Typography></MenuItem>
          <MenuItem icon={<PostAddRoundedIcon/>} component={<Link to="/ua/product/create" />}><Typography
              sx={{
                color: "grey",
                fontSize: "1em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
               Crear Producto
            </Typography></MenuItem>
            <MenuItem icon={<PeopleAltRoundedIcon/>} component={<Link to="/ua/control-eua" />}><Typography
              sx={{
                color: "grey",
                fontSize: "1em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
               Control Empleados
            </Typography></MenuItem>
          <MenuItem icon={<img src={logo} alt="logo" className="logo-sidebar" />} component={<Link to="/" />} rootStyles={{ justifyContent: "center", marginTop: "6em" }}><p className="iPunto">iPunto</p></MenuItem>

        </Menu>
        <Menu rootStyles={{ marginTop:"4em"}}>
          <MenuItem icon={<ExitToAppRoundedIcon />} component={<Link to="/" />} onClick={handleLogout} > Salir </MenuItem>
        </Menu>
      </Sidebar>
    // </Box>
  );
};
SidebarMenu.displaName = "SideBar";
export default SidebarMenu;
