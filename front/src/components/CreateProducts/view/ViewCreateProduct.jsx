// import React from "react";
import ButtonBack from "../../Utils/Buttons/ButtonBack";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import CreateProductsComponent from "../CreateProductsComponent";


const ViewCreateProducts = () => {

  const { user } = useSelector((state) => state.user);
  const { company } = useSelector((state) => state.company);


  const companyId = user ? user.companyID : null;

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {companyId ? (
        <Box
          sx={{
            display: "flex",
            width: "60em",
            flexDirection: "row",
            justifyContent: "space-around",
            mt: 2,
          }}
        >
          <div className="mt-10 ml-10">
            <ButtonBack />
          </div>
          <div>
            <h1 className="company-name-landingUA">{company.name}</h1>
            <p>ID: {company._id}</p>
          </div>
          <div className="image-company-landingUA">
            <img src={company.image.url} className="landingUA-img-company" />
          </div>
        </Box>
      ) : null}
      <CreateProductsComponent />
    </Box>
  );
};

export default ViewCreateProducts;
