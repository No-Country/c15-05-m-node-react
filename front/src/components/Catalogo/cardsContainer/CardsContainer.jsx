import React from "react";
import Card from "../card/Card";
//import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardsContainer = ({ searchQuery }) => {
  const products = [
    {
      _id: "5f8a0a5b6e95510f8c6d1a15",
      name: "Producto Ejemplo 1",
      price: 19.99,
      image: {
        url: "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        public_id: "abcd1234",
      },
      quantity: 30,
      description:
        "Este es el primer producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      category: ["Ropa", "Accesorios"],
      currency: "EUR",
      company: "5f8a0a5b6e95510f8c6d1a15",
    },
    {
      _id: "5f8a0a5b6e95510f8c6d1a616",
      name: "Producto Ejemplo 2",
      price: 39.99,
      image: {
        url: "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        public_id: "efgh5678",
      },
      quantity: 20,
      description:
        "Este es el segundo producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      category: ["Electrónicos", "Tecnología"],
      currency: "USD",
      company: "5f8a0a5b6e95510f8c6d1a16",
    },
    {
      _id: "5f8a0a5b6e95510f8c6d1a17",
      name: "Producto Ejemplo 3",
      price: 39.99,
      image: {
        url: "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        public_id: "efgh5678",
      },
      quantity: 20,
      description:
        "Este es el tercer producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      category: ["Electrónicos", "Tecnología"],
      currency: "USD",
      company: "5f8a0a5b6e95510f8c6d1a16",
    },
    {
      _id: "5f8a0a5b6e95510f8c6d1a18",
      name: "Producto Ejemplo 4",
      price: 39.99,
      image: {
        url: "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        public_id: "efgh5678",
      },
      quantity: 20,
      description:
        "Este es el cuarto producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      category: ["Electrónicos", "Tecnología"],
      currency: "USD",
      company: "5f8a0a5b6e95510f8c6d1a16",
    },
    {
      _id: "5f8a0a5b6e95510f8c6d1a19",
      name: "Producto Ejemplo 5",
      price: 39.99,
      image: {
        url: "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        public_id: "efgh5678",
      },
      quantity: 20,
      description:
        "Este es el quinto producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      category: ["Electrónicos", "Tecnología"],
      currency: "USD",
      company: "5f8a0a5b6e95510f8c6d1a16",
    },
    {
      _id: "5f8a0a5b6e95510f8c6d1a20",
      name: "Producto Ejemplo 6",
      price: 39.99,
      image: {
        url: "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        public_id: "efgh5678",
      },
      quantity: 20,
      description:
        "Este es el sexto producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      category: ["Electrónicos", "Tecnología"],
      currency: "USD",
      company: "5f8a0a5b6e95510f8c6d1a16",
    },
    {
      _id: "5f8a0a5b6e95510f8c6d1a21",
      name: "Producto Ejemplo 7",
      price: 39.99,
      image: {
        url: "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        public_id: "efgh5678",
      },
      quantity: 20,
      description:
        "Este es el septimo producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      category: ["Electrónicos", "Tecnología"],
      currency: "USD",
      company: "5f8a0a5b6e95510f8c6d1a16",
    },
    {
      _id: "5f8a0a5b6e95510f8c6d1a22",
      name: "Producto Ejemplo 8",
      price: 39.99,
      image: {
        url: "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        public_id: "efgh5678",
      },
      quantity: 20,
      description:
        "Este es el octavo producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      category: ["Electrónicos", "Tecnología"],
      currency: "USD",
      company: "5f8a0a5b6e95510f8c6d1a16",
    },
    {
      _id: "5f8a0a5b6e95510f8c6d1a23",
      name: "Producto Ejemplo 9",
      price: 39.99,
      image: {
        url: "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        public_id: "efgh5678",
      },
      quantity: 20,
      description:
        "Este es el noveno producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      category: ["Electrónicos", "Tecnología"],
      currency: "USD",
      company: "5f8a0a5b6e95510f8c6d1a16",
    },
    {
      _id: "5f8a0a5b6e95510f8c6d1a24",
      name: "Producto Ejemplo 10",
      price: 39.99,
      image: {
        url: "https://petindustry.co/wp-content/uploads/2022/02/PETSHOP-TENDENCIAS-PETINDUSTRY1.jpeg",
        public_id: "efgh5678",
      },
      quantity: 20,
      description:
        "Este es el decimo producto de ejemplo: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra. Duis a arcu convallis, gravida purus eget, mollis diam.",
      category: ["Electrónicos", "Tecnología"],
      currency: "USD",
      company: "5f8a0a5b6e95510f8c6d1a16",
    },
  ];
  // const products = [];
  // const products = useSelector(state => state.products)
  // const company = useSelector(state => state.company);
  //const nameCompany = company.name;
  const nameCompany = "Pet Shop";

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-wrap mx-10">
      {!filteredProducts.length ? (
        searchQuery !== products.name ? (
          <div className="w-100vw bg-white rounded-2xl text-center py-40 px-96 mx-10">
            <h2 className="text-xl font-semibold">Uhh...</h2>
            <h3 className="text-sm">
              No hay productos con ese nombre
            </h3>
          </div>
        ) : (
          <div className="w-100vw bg-white rounded-2xl text-center py-40 px-96 mx-10">
            <h2 className="text-xl font-semibold">Uhh...</h2>
            <h3 className="text-sm">
              Aún no hay productos cargados para tu empresa
            </h3>
            <h1 className="text-2xl font-semibold">{nameCompany}</h1>
            <Link
              className="text-lg font-semibold text-blue-300 hover:text-blue-700"
              to="/ua/product/create"
            >
              ¡Carga el primero!
            </Link>
          </div>
        )
      ) : (
        filteredProducts.map((p) => (
          <Card
            id={p.id}
            image={p.image}
            name={p.name}
            category={p.category}
            price={p.price}
            currency={p.currency}
            key={p.id}
          />
        ))
      )}
    </div>
  );
};

export default CardsContainer;
