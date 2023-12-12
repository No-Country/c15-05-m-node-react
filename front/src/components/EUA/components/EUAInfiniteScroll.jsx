import { useState} from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import EUACard from "./EUACard";
import { productsData } from "./data";
function EUAInfiniteScroll() {
    const [visibleItems, setVisibleItems] = useState(6);

    const fetchMoreData = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
      };

    return (
        <section className='EUA__list__products'>
            <InfiniteScroll className='EUA__list__products__ifinity'
                    dataLength={visibleItems}
                    next={fetchMoreData}
                    hasMore={visibleItems < productsData.length}
                    loader={<h4>Cargando...</h4>}
                    >

            {productsData.slice(0,visibleItems).map((item)=>(
                <EUACard 
                key={item._id} 
                name={item.name}
                price={item.price}
                category={item.category}/>
            ))}
            </InfiniteScroll>
            
        </section>
    );
}

export default EUAInfiniteScroll;