
function TableTr({name,quantity,price,total,id}) {
    return (
        <tr className='EUA__table__body--tr'>
        <td>Producto 1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td className='table__body__td--btn'>
            <button>Eliminar</button>
        </td>
    </tr>
    );
}

export default TableTr;