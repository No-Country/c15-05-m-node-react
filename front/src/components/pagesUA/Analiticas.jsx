import DashboardPage from "../dashboard/global/DashboardPage";
import { getCompanyAction } from "../../redux/actionsCompany";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Box } from "@mui/material";

const Analitics = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getCompanyAction(user.companyID));
    }
  }, [user, dispatch]);

  const { company } = useSelector((state) => state.company);
  return (
    <DashboardPage>
      <Box
        sx={{
        width: "80vw",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          mt: "1em"
        }}
      >
        <Box>
          <h1 className="company-name-landingUA">{company.name}</h1>
          <p>ID: {company._id}</p>
        </Box>
        <div className="image-company-landingUA">
          <img src={company.image.url} className="landingUA-img-company" />
        </div>
      </Box>
      <h1>GRÁFICAS</h1>

      {/* ACA TU COMPONENTE */}

    </DashboardPage>
  );
};

export default Analitics;
