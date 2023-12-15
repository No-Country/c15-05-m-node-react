const validationRC = (input) => {
    let errors = {};
    
    if(!input.name) {errors.name = 'Debe colocar el nombre de su Empresa'};
    if(!input.sector) {errors.sector = 'Debe indicar Industria o Rubro a la que se dedica su Empresa'};
    if(!input.country) {errors.country = 'Debe indicar el país de origen de su Empresa'};
    if(!input.image) {
        errors.image = 'Si no elige un logo para su Empresa, usaremos el de iPunto';
        setTimeout(() => {errors.image = '';}, 2000) 
        }
    
    return errors
}



export default validationRC;