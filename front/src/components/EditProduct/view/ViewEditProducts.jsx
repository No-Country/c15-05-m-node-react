// import React from "react";
import ButtonBack from "../../Utils/Buttons/ButtonBack";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import EditProductComponent from "../EditProductComponent"
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { getAllProductsAction } from "../../../redux/actionsProducts";

const ViewEditProducts = () => {
  // const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { company } = useSelector((state) => state.company);
  // const { products } = useSelector((state) => state.products);

  const companyId = user ? user.companyID : null;

  return (
      <Box sx={{display: "flex", flexDirection:"column", alignItems:"center" }}>
      {companyId ? (
        <Box
          sx={{
              display: "flex",
              width: "60em",
              flexDirection: "row",
              justifyContent: "space-around",
              mt: 2,
              // border: "1px solid red"
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
      <EditProductComponent/>
      </Box>
);
}
 
export default ViewEditProducts;