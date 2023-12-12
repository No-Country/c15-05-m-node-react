import './style.css'
import { HiOutlineSearch } from "react-icons/hi";
import { useState,useEffect} from 'react'
import Header from '../shared/Header/Header';
import EUAHeader from './components/EUAheader';
import CardList from './components/datalist';
import EUATable from './components/EUATable';
import { headerTableData } from './components/data';
import { useDispatch, useSelector } from "react-redux";
import { getCurrentHour,getCurrentDate } from './utils/utils';
import { useEUA } from './hooks/useEUA'
import EUAInfiniteScroll from './components/EUAInfiniteScroll';
function EUA() {
    const [currentHour, setCurrentHour] = useState(getCurrentHour())
    const [currentDate,setCurrentDate]= useState(getCurrentDate())
    const { products } = useEUA()
    const { user } = useSelector((state) => state.user);

    // ? Hora
    useEffect(()=>{
        const interval = setInterval(()=>{
            const time = getCurrentHour()
            setCurrentHour(time)
        },1000)
        return () => clearInterval(interval);
    }, []);

    // ? Fecha
    useEffect(()=>{
        const interval = setInterval(()=>{
            const time = getCurrentDate()
            setCurrentDate(time)
        },1000)
        return () => clearInterval(interval);
    },[]);

    const localCurrency  = "VES"
    const Divisa = "USD$"

    return (
        <div className='EUA__view__container'>
            <Header/>
            <section className='EUA__sales__views'>

                <EUAHeader name={"ShadowSell"} img={"https://i.imgur.com/T21NHN5.png"}/>
            
                <section className='EUA__info__and__total'>
                    <dl className='EUA__info'>
                        <div className='EUA__fecha'>
                            <CardList title={'Fecha'} info={currentDate} sale={false }/>
                            <CardList title={'Hora'} info={currentHour} sale={false }/>  
                        </div>
                        <div className='EUA__sale__info'>
                            <CardList title={'Factura'} info={'0023'} sale={false}/>
                            <CardList title={'Cajero'} info={'Pancho villa'} sale={false}/>
                        </div>
                    </dl>
                    <div className='EUA__total'>
                        <CardList title={`Total en ${localCurrency}`} info={70.43} sale={true}/>
                        <CardList title={`Total en ${Divisa}`} info={4} sale={true}/>
                    </div>

                </section>

                <section className='EUA__sales'>
                    <div className='EUA__table__Product'>
                        <EUATable headerTableData={headerTableData} productsTable={"nada"} />
                    </div>
                    <div className='EUA__list__products__container'>
                        <div className='EUA__products__search'>
                            <div  className='product__search--box'>
                                <h4>Buscar</h4>

                                <form className='product__search--input'>
                                    <button>
                                        <HiOutlineSearch/>
                                    </button>
                                    <input type="text"  />
                                </form>

                                <select name="" id="">
                                    <option value="">seleccionar..</option>
                                    <option value="">seleccionar..</option>
                                    <option value="">seleccionar..</option>
                                    <option value="">seleccionar..</option>
                                    <option value="">seleccionar..</option>
                                    <option value="">seleccionar..</option>
                                </select>
                                <select name="" id="">
                                    <option value="">seleccionar..</option>
                                    <option value="">seleccionar..</option>
                                    <option value="">seleccionar..</option>
                                    <option value="">seleccionar..</option>
                                    <option value="">seleccionar..</option>
                                    <option value="">seleccionar..</option>
                                    <option value="">seleccionar..</option>
                                </select>
                            </div>
                        </div>
                        <div className='EUA__list__products--box'>
                            <EUAInfiniteScroll/>
                            <section className='EUA__list--button'>

                            </section>
                        </div>

                    </div>
                </section>

            </section>
        </div>
    );
}

export default EUA;