

function EUACard({name,image,price,category,currency,quantity}) {
    return (
        <article className='EUA__product__card'>
            <img src={image.url} alt="" />
            <ul>
                <li className={quantity < 1? "text--red":""}>{name}</li>
                <li>{price} <strong>{currency}</strong></li>
                <li>{category[0]}, {category[1]}</li>
            </ul>  
        </article>
    );
}

export default EUACard;