import TableTr from "./tableTr";
function EUATable({products}) {
    return (
        <table className='EUA__table'>
                        <thead className='EUA__table__header'>
                            <tr className='EUA__table__header--tr'>
                                <th className='header__tr--th'>Nombre Producto</th>
                                <th className='header__tr--th'>Cantidad</th>
                                <th className='header__tr--th'>Precio</th>
                                <th className='header__tr--th'>Total</th>
                                <th className='header__tr--th'>Acción</th>
                            </tr>
                        </thead>
                        <tbody className='EUA__table__body'>
                              <TableTr/>
                        </tbody>
                    </table>
    );
}

export default EUATable;