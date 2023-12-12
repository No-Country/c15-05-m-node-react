
function EUACard({name,image,price,category}) {
    return (
        <article className='EUA__product__card'>
            <ul>
                <li>{name}</li>
                <li>{price}</li>
                <li>{category}</li>
            </ul>  
        </article>
    );
}

export default EUACard;