import { Box } from "@mui/material";
import Header from "../../shared/Header/Header";
import SidebarMenu from "./SideBar";
import PropTypes from "prop-types";

const DashboardPage = ({children}) => {
  return (
    <>
      <Header/>
      <Box sx={{ display: "flex" }}>
      <SidebarMenu/>{/* Agregar acá un condicional si se crearan varias Sidebar segú rol? */}
      {children}
      </Box>
    </>
  );
};
// DashboardPage.displayName = "DashboardPage";
DashboardPage.propTypes = {
  children: PropTypes.any,
}
export default DashboardPage;
