const validationRC = (input) => {
    let errors = {};
    
    if(!input.name) {errors.name = 'Debe colocar el nombre de su Empresa'};
    if(!input.sector) {errors.sector = 'Debe indicar Industria o Rubro a la que se dedica su Empresa'};
    if(!input.country) {errors.country = 'Debe indicar el país de origen de su Empresa'};

    return errors
}

export default validationRC;