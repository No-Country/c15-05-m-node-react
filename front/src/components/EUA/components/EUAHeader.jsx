import { Link } from "react-router-dom";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";

function EUAHeader({name,img}) {
    return (
        <header className='EUA__header'>
                    <Link className='EUA__link' to="/">
                    <IoIosArrowBack />
                        IPunto
                    </Link>
                    <div className='EUA__header__company'>
                        <h4>{name}</h4>
                        <img src={img} alt="logo Empresa" />
                    </div>
                    <Link className='EUA__link' to="#">
                        <RiLogoutBoxLine/> Salir
                    </Link>
                </header>
    );
}

export default EUAHeader;