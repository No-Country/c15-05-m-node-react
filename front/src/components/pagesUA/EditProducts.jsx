import { useEffect } from "react";
import DashboardPage from "../dashboard/global/DashboardPage";
import ViewEditProduct from "../EditProduct/view/ViewEditProducts.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAction } from "../../redux/actionsProducts.js";

const EditProducts = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    if (user) {
      dispatch(getAllProductsAction(user.companyID));
    }
  }, [user, dispatch]);
  return (
    <DashboardPage>
      <ViewEditProduct products={products} />
    </DashboardPage>
  );
};

export default EditProducts;
