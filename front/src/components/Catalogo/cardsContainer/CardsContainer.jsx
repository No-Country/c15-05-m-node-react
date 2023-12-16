// import React from "react";
import Card from "../card/Card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getCompanyAction } from "../../../redux/actionsCompany";
import { getAllProductsAction } from "../../../redux/actionsProducts";

const CardsContainer = () => {
  const { products } = useSelector((state) => state.products);
  const { company } = useSelector((state) => state.company);
  // const [compañia, setCompañia] = useState();

  // console.log("company", company);
  // useEffect(() => {
  //   if (company) {
  //     setCompañia(company);
  //   }
  // }, [company]);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getCompanyAction(user.companyID));
      if(user.companyID){

        dispatch(getAllProductsAction(user.companyID))
      }
    }
  }, [user, dispatch, company.id]);

  return (
    <div className="flex flex-wrap mx-10">
      {!products.length ? (
        <div className="w-100vw bg-white rounded-2xl text-center py-40 px-96 mx-10">
          <h2 className="text-xl font-semibold">Uhh...</h2>
          <h3 className="text-sm">
            Aún no hay productos cargados para tu empresa
          </h3>
          <h1 className="text-2xl font-semibold">
            {/* {compañia ? compañia.name : null} */}
          </h1>
          <Link
            className="text-lg font-semibold text-blue-300 hover:text-blue-700"
            to="/ua/product/create"
          >
            ¡Carga el primero!
          </Link>
        </div>
      ) : (
        products.map((p) => (
          <Card
            key={p.id}
            id={p.id}
            image={p.image}
            name={p.name}
            category={p.category}
            price={p.price}
            currency={p.currency}
          />
        ))
      )}
    </div>
  );
};

export default CardsContainer;
