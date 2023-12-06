import Detail from "../Detail/Detail";
// import {useSelector, useDispatch} from "react-redux";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { getProductDetailAction } from "../../redux/actionsProducts";

const DetailsProduct = () => {
    // const dispatch = useDispatch();
    // const companyId = useSelector(state => state.company._id);
    // const {productId} = useParams();

    // useEffect(() => {
    //     dispatch(getProductDetailAction(productId, companyId))
    // }, [dispatch, productId, companyId])


    return (
        <div>
            <Detail />
        </div>
    )
}

export default DetailsProduct;