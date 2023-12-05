import { Box } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useState } from "react";
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import PostAddRoundedIcon from '@mui/icons-material/PostAddRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import logo from "../../../assets/logo.svg";

const SidebarMenu = () => {
  const [ collapsedBar, setCollapsedBar ] = useState(false);

const handleCollapsed = () => {
  if(collapsedBar === false) {setCollapsedBar(true)} 
  if(collapsedBar === true) {setCollapsedBar(false)} 
}

const handleLogout = () => {
//logoutAction()
}
  return (
    <Box >
      <Sidebar rootStyles={{ height: "100vh", fontSize: ".9em", boxShadow:" 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)"}} collapsed={collapsedBar}>
        <Menu>
        <MenuItem icon={<MenuRoundedIcon />} onClick={handleCollapsed} rootStyles={{ color: "#00bcd4" }} ></MenuItem>
        </Menu>
        <Menu
          rootStyles={{ marginTop: "1em" }}
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: "#B2EBF2",
                color: "#B2EBF2",
              },
            },
          }}
        >
          <MenuItem icon={<AdminPanelSettingsRoundedIcon/>} component={<Link to="/perfil" />}> Mi Perfil</MenuItem>
          <MenuItem icon={<AppsRoundedIcon/>} component={<Link to="/catalogo???" />}> Catálogo</MenuItem>
          <MenuItem icon={<ListRoundedIcon/>} component={<Link to="/ua/product/inventory"  />}> Inventario</MenuItem>
          <MenuItem icon={<AutoFixHighRoundedIcon/>} component={<Link to="/ua/product/edit" />}> Editar Producto</MenuItem>
          <MenuItem icon={<PostAddRoundedIcon/>} component={<Link to="/ua/product/create" />}> Crear Producto</MenuItem>
          <MenuItem icon={<img src={logo} alt="logo" className="logo-sidebar" />} component={<Link to="/" />} rootStyles={{ justifyContent: "center", marginTop: "6em" }}><h3>iPunto</h3></MenuItem>

        </Menu>
        <Menu rootStyles={{ marginTop:"4em"}}>
          <MenuItem icon={<ExitToAppRoundedIcon />} onClick={handleLogout} > Salir </MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};
SidebarMenu.displaName = "SideBar";
export default SidebarMenu;
