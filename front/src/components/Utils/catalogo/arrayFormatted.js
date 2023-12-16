const arrayFormatted = (array, prop) => {
    const arrayFormatted = array.length ? array.map((obj, index) => {
        const objectProp = obj[prop];
        const propFormatted= objectProp.charAt(0).toUpperCase() + objectProp.slice(1).toLowerCase();
        return {
          ...product,
          [prop]: propFormatted,
          key: index
        }
      }) : [];
      return arrayFormatted;
}

export default arrayFormatted;