import { Box, Button } from "@mui/material";
import PanelCrearProducto from "./PanelCrearProducto";
import PanelOptions from "./PanelOptions";
import { useState } from "react";

const CreateProductsComponent = () => {
  const [input, setInput] = useState("");
  const [inputNumber, setInputNumber] = useState(Number);
  const [selectValue, setSelectValue] = useState("");

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imageProduct, setImageProduct] = useState("");
  const [categoria, setCategoria] = useState([]);
  const [precio, setPrecio] = useState(Number);
  const [moneda, setMoneda] = useState("");
  const array = [];
  // console.log("INPUT CREATE", inputCreate.name);
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
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const handleInputNumberChange = (event) => {
    setSelectValue(event.target.name);
    setInputNumber(event.target.value);
    const value = parseFloat(inputNumber).toFixed(10).replace(",", ".");
    if (!isNaN(value)) {
      event.target.value = formatter.format(value);
    }
    setPrecio(value);
  };
  //Moneda
  console.log("MONEDA", moneda);
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
        setPrecio(inputNumber);
        setInputNumber(Number);
        setPrecio();
        break;
      case "currency":
        setMoneda(moneda);
        break;
      default:
        "";
        break;
    }
  };
  // console.log("PRECIO", precio);
  const product = {
    image: imageProduct,
    name: nombre,
    description: descripcion,
    category: categoria,
    price: inputNumber,
    currency: moneda,
    // price: parseFloat(precio).toFixed(2).replace(",", "."),
  };
  console.log("PRODUCTO FINAL", product);
  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("PRODUCTO CREADO");
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
          input={input}
          nombre={nombre}
          image={imageProduct}
          descripcion={descripcion}
          imageProduct={imageProduct}
          setImageProduct={setImageProduct}
          // handleInputCreateChange={handleInputCreateChange}
          handleInputChange={handleInputChange}
          handleInputNameChange={handleInputNameChange}
          handleInputDescriptionChange={handleInputDescriptionChange}
          onChangeImage={onChangeImage}
          handleClickPanelOptions={handleClickPanelOptions}
        />
        <PanelOptions
          nombre={product.name}
          moneda={moneda}
          image={product.image}
          input={input}
          categoria={categoria}
          description={product.description}
          imageProduct={imageProduct}
          precio={precio}
          category={product.category}
          inputNumber={inputNumber}
          selectValue={selectValue}
          handleClickPanelOptions={handleClickPanelOptions}
          handleInputChange={handleInputChange}
          handleInputNumberChange={handleInputNumberChange}
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
