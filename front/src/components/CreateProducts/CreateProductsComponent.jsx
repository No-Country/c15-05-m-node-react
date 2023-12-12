import { Box, Button } from "@mui/material";
import PanelCrearProducto from "./PanelCrearProducto";
import PanelOptions from "./PanelOptions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProductAction } from "../../redux/actionsProducts"
// import { useNavigate } from "react-router-dom";

const CreateProductsComponent = () => {
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imageProduct, setImageProduct] = useState("");
  const [categoria, setCategoria] = useState([]);
  const [precio, setPrecio] = useState(0);
  const [moneda, setMoneda] = useState("");
  const array = [];

  //Imagen
  const onChangeImage = (imageList) => {
    const imageUrl = imageList.shift();
    setImageProduct(imageUrl.data_url);
  };
  //Categoría
  const handleInputChange = (event) => {
    setSelectValue(event.target.name);
    setInput(event.target.value);
  };
  //Nombre
  const handleInputNameChange = (event) => {
    setSelectValue(event.target.name);
    setNombre(event.target.value);
  };
  //Descripción
  const handleInputDescriptionChange = (event) => {
    setSelectValue(event.target.name);
    setDescripcion(event.target.value);
  };
  //Precio
  const handleInputPriceChange = (value) => {
 
    setPrecio(value);
  };

  //Moneda
  const handleInputCurrencyChange = (event) => {
    setSelectValue(event.target.name);
    setMoneda(event.target.value);
  };
  const handleClickPanelOptions = (event) => {
    event.preventDefault();
    switch (selectValue) {
      case "name":
        setNombre(nombre);
        break;
      case "description":
        setDescripcion(descripcion);
        break;
      case "category":
        array.push(input);
        setCategoria([...categoria, array[0]]);
        setInput("");
        break;
      case "price":
        setPrecio(0);
        break;
      case "currency":
        setMoneda(moneda);
        break;
      default:
        "";
        break;
    }
  };

  const product = {
    name: nombre,
    description: descripcion,
    image: imageProduct,
    category: categoria,
    price: precio,
    currency: moneda,
  };
  console.log("PRODUCT", product);
  const handleSubmit = (event) => {
    event.preventDefault();
dispatch(createProductAction(product))
    // alert("PRODUCTO CREADO");
  };
  return (
    <form onSubmit={handleSubmit} className="form-createComponent" action="">
      <Box
        sx={{
          display: "flex",
          gap: "1em",
          flexDirection: "row",
          flexWrap: "warp",
        }}
      >
        <PanelCrearProducto
          nombre={nombre}
          descripcion={descripcion}
          imageProduct={imageProduct}
          handleInputChange={handleInputChange}
          handleInputNameChange={handleInputNameChange}
          handleInputDescriptionChange={handleInputDescriptionChange}
          onChangeImage={onChangeImage}
        />
        <PanelOptions
          nombre={product.name}
          description={product.description}
          imageProduct={imageProduct}
          price={product.price}
          moneda={moneda}
          currency={product.currency}
          precio={precio}
          category={product.category}
          input={input}
          handleClickPanelOptions={handleClickPanelOptions}
          handleInputChange={handleInputChange}
          handleInputPriceChange={handleInputPriceChange}
          handleInputCurrencyChange={handleInputCurrencyChange}
        />
      </Box>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        elevation={0}
        sx={{
          width: "40em",
          height: "3em",
          left: 0,
          backgroundColor: "#00bcd4",
          borderRadius: "5px",
          justifyContent: "center",
          mt: "1.5em",
          ["&:hover"]: { backgroundColor: "#B2EBF2", color: "#00BCD4" },
          boxShadow: " 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        CREAR PRODUCTO
      </Button>
    </form>
  );
};

export default CreateProductsComponent;
