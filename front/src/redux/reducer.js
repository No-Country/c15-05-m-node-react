import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
  USER_REGISTER,
  GET_PRODUCT_DETAIL,
  COMPANY_REGISTER,
  USER_LOGIN,
  USER_LOGOUT,
  SORT_BY_PRICE,
  SORT_BY_STOCK,
  GET_COMPANY,
  FILTER_BY_CATEGORY,

} from "./types";


const initialState = {
  //DATOS DE LA COMPAÑIA
  //company: {},
  company: {
    _id: "123456789a",
    name: 'SweetYPets',
    country: "Argentina",
    image: "https://img.freepik.com/vector-premium/petshop-gato-perro_9645-763.jpg"
  },
  //DATOS DEL USUARIO
  //user: {},
  user: {
    _id: "657ba87bcb934a37b8911431",
    name: "virginia1",
    email: "virM@mail.com",
    UA: true,
    EUA: false, 
    companyID: "657ba8c3cb934a37b8911433"
  },
  //TODOS LOS PRODUCTOS DE UNA COMPAÑIA
  //products: [],
   products : [
    {
      "_id":"5f8a0a5b6e95510f8c6d1a15",
      "name": "zorro",
      "price": 19.99,
      "image": {
        "url": "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        "public_id": "abcd1234"
      },
      "quantity": 30,
      "description": "Este es el primer producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      "category": ["Animales", "Bosque"],
      "currency": "EUR",
      "company": "5f8a0a5b6e95510f8c6d1a15"
    },
    {
      "_id":"5f8a0a5b6e95510f8c6d1a616",
      "name": "ardilla",
      "price": 39.99,
      "image": {
        "url": "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        "public_id": "efgh5678"
      },
      "quantity": 20,
      "description": "Este es el segundo producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      "category": ["Animales", "Bosque"],
      "currency": "USD",
      "company": "5f8a0a5b6e95510f8c6d1a16"
    },
    {
      "_id":"5f8a0a5b6e95510f8c6d1a17",
      "name": "cocodrilo",
      "price": 55.75,
      "image": {
        "url": "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        "public_id": "efgh5678"
      },
      "quantity": 20,
      "description": "Este es el tercer producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      "category": ["Animales", "Jungla"],
      "currency": "USD",
      "company": "5f8a0a5b6e95510f8c6d1a16"
    },
    {
      "_id":"5f8a0a5b6e95510f8c6d1a18",
      "name": "oveja",
      "price": 17.98,
      "image": {
        "url": "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        "public_id": "efgh5678"
      },
      "quantity": 10,
      "description": "Este es el cuarto producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      "category": ["Animales", "Granja"],
      "currency": "USD",
      "company": "5f8a0a5b6e95510f8c6d1a16"
    },
    {
      "_id":"5f8a0a5b6e95510f8c6d1a19",
      "name": "heno",
      "price": 9.99,
      "image": {
        "url": "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        "public_id": "efgh5678"
      },
      "quantity": 100,
      "description": "Este es el quinto producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      "category": ["Alimento", "Granja"],
      "currency": "USD",
      "company": "5f8a0a5b6e95510f8c6d1a16"
    },
    {
      "_id":"5f8a0a5b6e95510f8c6d1a20",
      "name": "Alimento para peces",
      "price": 19.99,
      "image": {
        "url": "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        "public_id": "efgh5678"
      },
      "quantity": 27,
      "description": "Este es el sexto producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      "category": ["Alimento", "Acuario"],
      "currency": "USD",
      "company": "5f8a0a5b6e95510f8c6d1a16"
    },
  ],
  //BACKUP PRODUCTS **para filtros**
  //allProducts: [],
  allProducts : [
    {
      "_id":"5f8a0a5b6e95510f8c6d1a15",
      "name": "zorro",
      "price": 19.99,
      "image": {
        "url": "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        "public_id": "abcd1234"
      },
      "quantity": 30,
      "description": "Este es el primer producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      "category": ["Animales", "Bosque"],
      "currency": "EUR",
      "company": "5f8a0a5b6e95510f8c6d1a15"
    },
    {
      "_id":"5f8a0a5b6e95510f8c6d1a616",
      "name": "ardilla",
      "price": 39.99,
      "image": {
        "url": "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        "public_id": "efgh5678"
      },
      "quantity": 20,
      "description": "Este es el segundo producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      "category": ["Animales", "Bosque"],
      "currency": "USD",
      "company": "5f8a0a5b6e95510f8c6d1a16"
    },
    {
      "_id":"5f8a0a5b6e95510f8c6d1a17",
      "name": "cocodrilo",
      "price": 55.75,
      "image": {
        "url": "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        "public_id": "efgh5678"
      },
      "quantity": 20,
      "description": "Este es el tercer producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      "category": ["Animales", "Jungla"],
      "currency": "USD",
      "company": "5f8a0a5b6e95510f8c6d1a16"
    },
    {
      "_id":"5f8a0a5b6e95510f8c6d1a18",
      "name": "oveja",
      "price": 17.98,
      "image": {
        "url": "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        "public_id": "efgh5678"
      },
      "quantity": 10,
      "description": "Este es el cuarto producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      "category": ["Animales", "Granja"],
      "currency": "USD",
      "company": "5f8a0a5b6e95510f8c6d1a16"
    },
    {
      "_id":"5f8a0a5b6e95510f8c6d1a19",
      "name": "heno",
      "price": 9.99,
      "image": {
        "url": "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        "public_id": "efgh5678"
      },
      "quantity": 100,
      "description": "Este es el quinto producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      "category": ["Alimento", "Granja"],
      "currency": "USD",
      "company": "5f8a0a5b6e95510f8c6d1a16"
    },
    {
      "_id":"5f8a0a5b6e95510f8c6d1a20",
      "name": "Alimento para peces",
      "price": 19.99,
      "image": {
        "url": "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        "public_id": "efgh5678"
      },
      "quantity": 27,
      "description": "Este es el sexto producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      "category": ["Alimento", "Acuario"],
      "currency": "USD",
      "company": "5f8a0a5b6e95510f8c6d1a16"
    },
  ],
  //DETALLE DE UN PRODUCTO
  productDetail: {},
    // productDetail: {
  //   "_id":"5f8a0a5b6e95510f8c6d1a616",
  //   "name": "ardilla",
  //   "price": 39.99,
  //   "image": {
  //     "url": "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
  //     "public_id": "efgh5678"
  //   },
  //   "quantity": 20,
  //   "description": "Este es el segundo producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
  //   "category": ["Animales", "Bosque"],
  //   "currency": "USD",
  //   "company": "5f8a0a5b6e95510f8c6d1a16"
  // },
};
console.log("INITIAL STATE REDUCER", initialState);
export const reducerCompany = (state = initialState, action) => {
  switch (action.type) {
    case COMPANY_REGISTER:
      return {
        ...state,
        company: action.payload,
      };
    case GET_COMPANY:
      return {
        ...state,
        company: action.payload
      }
    default:
      return { ...state };
  }
};

// export const reducerUsers = (state = {}, action) => {
  export const reducerUsers = (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTER:
      return {
        ...state,
        user: action.payload,
      };

    case USER_LOGIN:
      return {
        ...state,
        user: action.payload,
      };
      case USER_LOGOUT:
      return {
        ...state,
        user: {},
      };

    default:
      return { ...state };
  }
};

export const reducerProducts = (state = initialState, action) => {
  switch (action.type) {
//CREACION DE PRODUCTO
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        allProducts: [...state.allProducts, action.payload]
      };
//OBTENER TODOS LOS PRODUCTOS DE UNA COMPAÑIA
      case GET_ALL_PRODUCTS:
        return {
          ...state, 
          products: action.payload,
          allProducts: action.payload
        }
//OBTENER DETALLE DE PRODUCTO
        case GET_PRODUCT_DETAIL:
          return {
            ...state,
            productDetail: action.payload
          }
//ORDEN POR PRECIO
        case SORT_BY_PRICE:
          console.log(typeof initialState.products); // objeto
          console.log(typeof state.products); //string?
  //por eso en esta funcion voy usar initialState
          let sortArray = action.payload === 'Asc' ?
          initialState.products.sort((a, b) => {
             return a.price - b.price
          }) :
          initialState.products.sort((a, b) => {
              return b.price - a.price
          });
          //console.log(sortArray);
          return  {
              ...initialState,
              products: [...sortArray] //asigno la referencia de sortArray y no modifico el estado original
          };
//ORDEN POR STOCK
        case SORT_BY_STOCK:
          //IDEM CASE ANTERIOR CON TYPEOF
          let sortStockArray = action.payload === 'Asc' ?
            initialState.products.sort((a, b) => {
            return a.quantity - b.quantity
          }) :
            initialState.products.sort((a, b) => {
            return b.quantity - a.quantity
          });
          //console.log(sortStockArray);
         return  {
          ...initialState,
          products: [...sortStockArray] 
        };   
//FILTRAR POR CATEGORIA:
        case FILTER_BY_CATEGORY: 
        console.log('entro al reducer, con value: ', action.payload);
        const allProducts = initialState.allProducts;
        console.log('PRODUCTOS: ', allProducts);
        const filtered =  action.payload === 'all' ? allProducts : allProducts.filter(product => product.category.includes(action.payload))
        console.log('ARRAY FILTRADO:', filtered);
        return {
          ...state, 
          products: filtered
        }


    default:
      return { ...state };
  }
};
