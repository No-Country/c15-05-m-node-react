import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Detail from "../Detail/Detail";
import ButtonBack from "../Utils/Buttons/ButtonBack";
import Spinner from "../Utils/Spinner";
import { getProductDetailAction } from "../../redux/actionsProducts";
import { getCompanyAction } from "../../redux/actionsCompany";

const DetailsProduct = () => {
    const dispatch = useDispatch();
    const user= useSelector(state => state.user.user);
    const companyId = user.companyID;
    //console.log(" COMPAÑIA: ", companyId);
    const {detailId} = useParams();
    //console.log("ID PRODUCTO: ", detailId);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //console.log("despacha la action");
        //console.log("id producto: ", detailId);
        //console.log("id compañia: ", companyId);
        dispatch(getProductDetailAction(detailId, companyId));
        dispatch(getCompanyAction(companyId))
        setTimeout(() => {
            setIsLoading(false)
          }, 3000);
    }, [dispatch, detailId, companyId])


    return ( 
        <div className="w-10/12 h-50 bg-white rounded-2xl mx-auto">
            {isLoading ? <Spinner/> :
                <div>
                    <Detail />
                    <div className="px-10 pb-10">
                        <ButtonBack />
                    </div>
                </div>
            }
        </div>
    )
}

export default DetailsProduct;