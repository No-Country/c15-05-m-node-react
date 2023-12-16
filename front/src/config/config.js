const { VITE_URL_DEV } = import.meta.env //para trabajar 
// const { VITE_URL_PROD } = import.meta.env

let url = VITE_URL_DEV
// let url = VITE_URL_PROD

export const APIKEY_CURRENCY = import.meta.env.VITE_API_KEY_CURRENCY
export default url;