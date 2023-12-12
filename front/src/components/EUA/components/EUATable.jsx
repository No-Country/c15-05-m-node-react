import TableTr from "./tableTr";
function EUATable({headerTableData,productsTable}) {
    return (
        <table className='EUA__table'>
                        <thead className='EUA__table__header'>
                            <tr className='EUA__table__header--tr'>
                                <th className='header__tr--th'>{headerTableData.title1}</th>
                                <th className='header__tr--th'>{headerTableData.title2}</th>
                                <th className='header__tr--th'>{headerTableData.title3}</th>
                                <th className='header__tr--th'>{headerTableData.title4}</th>
                                <th className='header__tr--th'>{headerTableData.title5}</th>
                            </tr>
                        </thead>
                        <tbody className='EUA__table__body'>
                              <TableTr/>
                        </tbody>
                    </table>
    );
}

export default EUATable;