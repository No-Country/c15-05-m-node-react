import Detail from "../Detail/Detail";
import ButtonBack from "../Utils/Buttons/ButtonBack";
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
        <div className="w-auto h-auto bg-white rounded-2xl relative">
            <Detail />
            <div className="absolute right-20 -mt-28">
                <ButtonBack />
            </div>
        </div>
    )
}

export default DetailsProduct;