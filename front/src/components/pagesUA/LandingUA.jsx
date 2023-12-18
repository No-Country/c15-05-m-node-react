import "./LandingUA.css";
import { Box, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "../shared/Header/Header";
import gestionInventario from "../../assets/Imagenes/gestionInventario.jpg";
import { getCompanyAction } from "../../redux/actionsCompany";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const LandingUA = () => {
  const { user } = useSelector((state) => state.user);
  const { company } = useSelector((state) => state.company);
  const dispatch = useDispatch();
  // const { products } = useSelector((state) => state.products);
  console.log("ID", company._id);
  useEffect(() => {
    if (user) {
      dispatch(getCompanyAction(user.companyID));
    }
  }, [user, dispatch]);

  return (
    <>
      <div className="landingUA-imageContainer">
        <img src={gestionInventario} className="landingUA-img" />
      </div>
      <Header showDown={false} />
      {company.image ? (
        <Box sx={{ backgroundColor: "white", opacity: ".7"}}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            mt: 2,
          }}
        >
          <div>
            <h1 className="company-name-landingUA">{company.name}</h1>
            <p>ID: {company._id}</p>
          </div>
          <div className="image-company-landingUA">
            <img src={company.image.url} className="landingUA-img-company" />
          </div>
        </Box>
        </Box>
      ) : null}

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(auto fit, minmax(2, 1fr))",
          gap: "5em",
          justifyContent: "center",
          padding: "2em",
          margin: ".5em 6em",
          position: "relative",
        }}
      >
        <Link to="/">
          <MenuItem
            sx={{
              width: "18em",
              height: "9em",
              backgroundColor: "#00bcd4",
              borderRadius: "15px",
              justifyContent: "center",
              ["&:hover"]: { backgroundColor: "#B2EBF2" },
              boxShadow: " 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "3em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
              Home
            </Typography>
          </MenuItem>
        </Link>
        <Link to="/ua/profile">
          <MenuItem
            sx={{
              width: "18em",
              height: "9em",
              backgroundColor: "#00bcd4",
              borderRadius: "15px",
              justifyContent: "center",
              ["&:hover"]: { backgroundColor: "#B2EBF2" },
              boxShadow: " 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "3em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
              Mi Perfil
            </Typography>
          </MenuItem>
        </Link>
        <Link to="/ua/product/analitics">
          <MenuItem
            sx={{
              width: "18em",
              height: "9em",
              backgroundColor: "#00bcd4",
              borderRadius: "15px",
              justifyContent: "center",
              ["&:hover"]: { backgroundColor: "#B2EBF2" },
              boxShadow: " 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "3em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
              Analíticas
            </Typography>
          </MenuItem>
        </Link>
        <Link to="/ua/product/catalogo">
          <MenuItem
            sx={{
              width: "18em",
              height: "9em",
              backgroundColor: "#00bcd4",
              borderRadius: "15px",
              justifyContent: "center",
              ["&:hover"]: { backgroundColor: "#B2EBF2" },
              boxShadow: " 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "3em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
              Catálogo
            </Typography>
          </MenuItem>
        </Link>
        <Link to="/ua/product/edit">
          <MenuItem
            sx={{
              width: "18em",
              height: "9em",
              backgroundColor: "#00bcd4",
              borderRadius: "15px",
              justifyContent: "center",
              ["&:hover"]: { backgroundColor: "#B2EBF2" },
              boxShadow: " 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "2em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
              Editar Producto
            </Typography>
          </MenuItem>
        </Link>
        <Link to="/ua/product/create">
          <MenuItem
            sx={{
              width: "18em",
              height: "9em",
              backgroundColor: "#00bcd4",
              borderRadius: "15px",
              justifyContent: "center",
              ["&:hover"]: { backgroundColor: "#B2EBF2" },
              boxShadow: " 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "2em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
              Nuevo Producto
            </Typography>
          </MenuItem>
        </Link>
        <Link to="/ua/control-eua">
          <MenuItem
            sx={{
              width: "18em",
              height: "9em",
              backgroundColor: "#00bcd4",
              borderRadius: "15px",
              justifyContent: "center",
              ["&:hover"]: { backgroundColor: "#B2EBF2" },
              boxShadow: " 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "2em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
              Capital Humano
            </Typography>
          </MenuItem>
        </Link>
        <Link to="/ua/product/inventory">
          <MenuItem
            sx={{
              width: "18em",
              height: "9em",
              backgroundColor: "#00bcd4",
              borderRadius: "15px",
              justifyContent: "center",
              ["&:hover"]: { backgroundColor: "#B2EBF2" },
              boxShadow: " 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: "3em",
                ["&:hover"]: { color: "#00BCD4" },
              }}
            >
              Inventario
            </Typography>
          </MenuItem>
        </Link>
      </Box>
    </>
  );
};

export default LandingUA;
