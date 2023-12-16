import { Box } from "@mui/material";
import Header from "../../shared/Header/Header";
import SidebarMenu from "./SideBar";
import PropTypes from "prop-types";

const DashboardPage = ({children}) => {
  return (
    <Box>
      <Header/>
      <Box sx={{ display: "flex" }}>
      <SidebarMenu/>
      {children}
      </Box>
    </Box>
  );
};
// DashboardPage.displayName = "DashboardPage";
DashboardPage.propTypes = {
  children: PropTypes.any,
}
export default DashboardPage;
