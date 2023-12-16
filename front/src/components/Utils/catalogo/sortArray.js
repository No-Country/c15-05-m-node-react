const sortArray = (array, prop) => {
    const sortArray = array.length ? array.sort((a, b) => {
        if(a[prop] > b[prop]) {return 1}
        if(b[prop] > a[prop]) {return -1}
        return 0 
      }) : [];
    return sortArray;
}

export default sortArray;