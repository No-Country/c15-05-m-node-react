import "./LandingUA.css";
import { Box, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../shared/Header/Header";
import logo from "../../assets/logo.svg";

const LandingUA = () => {
  return (
    <>
      <div className="landingUA-imageContainer">
        <img src={logo} className="landingUA-img" />
      </div>
      <Header />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(auto fit, minmax(2, 1fr))",
          gap: "5em",
          justifyContent: "center",
          padding: "2em",
          margin: "4em 6em",
          position: "relative",
        }}
      >
        <MenuItem
          sx={{
            width: "18em",
            height: "9em",
            backgroundColor: "#00bcd4",
            borderRadius: "15px",
            justifyContent: "center",
            ["&:hover"]: { backgroundColor: "#B2EBF2" },
            boxShadow:" 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)"
          }}
        >
          <Link to="/">
            <Typography
              sx={{
                color: "white",
                fontSize: "3em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
              Home
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            width: "18em",
            height: "9em",
            backgroundColor: "#00bcd4",
            borderRadius: "15px",
            justifyContent: "center",
            ["&:hover"]: { backgroundColor: "#B2EBF2" },
            boxShadow:" 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)"
          }}
        >
          <Link to="/ua/product/inventory">
            <Typography
              sx={{
                color: "white",
                fontSize: "3em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
              Inventario
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            width: "18em",
            height: "9em",
            backgroundColor: "#00bcd4",
            borderRadius: "15px",
            justifyContent: "center",
            ["&:hover"]: { backgroundColor: "#B2EBF2" },
            boxShadow:" 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)"
          }}
        >
          <Link to="/ua/product/analitics">
            <Typography
              sx={{
                color: "white",
                fontSize: "3em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
              Analíticas
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            width: "18em",
            height: "9em",
            backgroundColor: "#00bcd4",
            borderRadius: "15px",
            justifyContent: "center",
            ["&:hover"]: { backgroundColor: "#B2EBF2" },
            boxShadow:" 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)"
          }}
        >
          <Link to="/ua/product/catalogo">
            <Typography
              sx={{
                color: "white",
                fontSize: "3em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
              Catálogo
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            width: "18em",
            height: "9em",
            backgroundColor: "#00bcd4",
            borderRadius: "15px",
            justifyContent: "center",
            ["&:hover"]: { backgroundColor: "#B2EBF2" },
            boxShadow:" 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)"
          }}
        >
          <Link to="/ua/product/edit">
            <Typography
              sx={{
                color: "white",
                fontSize: "2em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
              Editar Producto
            </Typography>
          </Link>
        </MenuItem>
        <MenuItem
          sx={{
            width: "18em",
            height: "9em",
            backgroundColor: "#00bcd4",
            borderRadius: "15px",
            justifyContent: "center",
            ["&:hover"]: { backgroundColor: "#B2EBF2" },
            boxShadow:" 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)"
          }}
        >
          <Link to="/ua/product/create">
            <Typography
              sx={{
                color: "white",
                fontSize: "2em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
              Nuevo Producto
            </Typography>
          </Link>
        </MenuItem>
      </Box>
    </>
  );
};

export default LandingUA;
