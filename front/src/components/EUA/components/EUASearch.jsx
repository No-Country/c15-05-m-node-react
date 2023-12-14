import { HiOutlineSearch } from "react-icons/hi";
import { useEUA } from '../hooks/useEUA'
function EUASearch() {
    const { products,setProductsFilter,categories} = useEUA()

    const filterProducts = (filters) => {
        return products.filter(product => {
            const nameFilter = filters.name ? product.name.toLowerCase().includes(filters.name) : true;
            const categoryFilter = filters.category ? (
                product.category[0].toLowerCase().includes(filters.category) ||
                product.category[1].toLowerCase().includes(filters.category)
            ) : true;
    
            return nameFilter && categoryFilter;
        });
    }
    
    const handleChangeSearch = (event) => {
        const search = event.target.value.toLowerCase();
        setProductsFilter(filterProducts({ name: search }));
    }
    
    const handleChangeCategory = (event) => {
        const category = event.target.value.toLowerCase();
        setProductsFilter(filterProducts({ category }));
    }
    

    return (
        <div  className='product__search--box'>
            <h4>Buscar</h4>

            <form className='product__search--input'>
                <button>
                    <HiOutlineSearch/>
                </button>
                <input type="text" onChange={handleChangeSearch} placeholder='Nombre ...' />
            </form>

        <select onChange={handleChangeCategory} name="Category" >
            <option value="">Categorias</option>
            {
                categories.map((item,index)=>(
                    <option key={index} value={item.title}>{item.title}</option>
                ))
            }
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
    );
}

export default EUASearch; 
