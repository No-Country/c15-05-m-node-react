const formatNumber = (number) => {
    return number < 10 ? `0${number}` : `${number}`;
};

export const getCurrentHour = () => {
    const time = new Date();
    const hours = formatNumber(time.getHours());
    const minutes = formatNumber(time.getMinutes());

    return `${hours}:${minutes}`;
};

export const getCurrentDate = ()=>{
    const fechaLocal = new Date();

    const day = formatNumber(fechaLocal.getDate());
    const month = formatNumber( fechaLocal.getMonth() + 1);
    const year = fechaLocal.getFullYear();

    return `${day}/${month}/${year}`
}