// recibe como parametro un array de objetos y una propiedad(array)
const reduceSelect = (arr, prop) => {
    // concatena los array de esa propiedad
    const concatArr= arr.flatMap(obj => obj[prop]).flat(); 
    // estandariza la escritura(lower Case)
    const lowerC = concatArr.map(el => el.toLowerCase());
    // quita los items repetidos
    const notRepeatArr = lowerC.filter((el, index) => lowerC.indexOf(el) === index);
    //pone mayuscula letra capital en cada item
    const arrCapitalL = notRepeatArr.map(el => el[0].toUpperCase());
    // retorna ese array ordenado alfabeticamente
    return arrCapitalL.sort((a, b) => a.localeCompare(b));
}

export default reduceSelect;