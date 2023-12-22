import { Menu, MenuItem } from "react-pro-sidebar";
import ExitToAppRoundedIcon from "@mui/icons-material/ExitToAppRounded";
import { userLogoutAction } from "../../../redux/actionsUser";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
const Logout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = async (event) => {
        event.preventDefault();
        localStorage.removeItem('user')
        dispatch(userLogoutAction());
        navigate("/");
        window.location.reload(true);
      };
    return ( 
        <>
          <Menu>
        <MenuItem
          icon={<img src={logo} alt="logo" className="logo-sidebar" />}
          component={<Link to="/" />}
          rootStyles={{ justifyContent: "center", marginTop: "2em" }}
        >
          <p className="iPunto">iPunto</p>
        </MenuItem>
        <MenuItem rootStyles={{ justifyContent: "center", marginTop: "2em" }}
          icon={<ExitToAppRoundedIcon />}
          component={<Link to="/" />}
          onClick={handleLogout}
        >
          Salir
        </MenuItem>
        </Menu>
        </>
     );
}
 
export default Logout;