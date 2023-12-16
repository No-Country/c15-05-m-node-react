import { Button } from "@mui/material";
import PanelCrearProducto from "./PanelCrearProducto";
import PanelOptions from "./PanelOptions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProductAction } from "../../redux/actionsProducts";
import CurrencyInput from "react-currency-input-field";

const CreateProductsComponent = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imageProduct, setImageProduct] = useState("");
  const [categoria, setCategoria] = useState([]);
  const [precio, setPrecio] = useState(0);
  const [price, setPrice] = useState(0);
  const [moneda, setMoneda] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [quantity, setQuantity] = useState(0);
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
  const handleInputPriceChange = (value, name) => {
    name = "price";
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setSelectValue(name);
      setPrecio(parsedValue);
    }
  };
  //Moneda
  const handleInputCurrencyChange = (event) => {
    setSelectValue(event.target.name);
    setMoneda(event.target.value);
  };
  //Cantidad
  const handleInputQuantityChange = (event) => {
    setSelectValue(event.target.name);
    const parsedValue = parseFloat(event.target.value);
    if (!isNaN(parsedValue)) {
      setCantidad(parsedValue);
    }
  };
  const handleClickPanelOptions = (event) => {
    event.preventDefault();
    switch (selectValue) {
      case "category":
        array.push(input);
        setCategoria([...categoria, array[0]]);
        setInput("");
        break;
      case "price":
        setPrice(precio);
        setPrecio(0);
        break;
      case "currency":
        setMoneda(moneda);
        break;
      case "quantity":
        setQuantity(cantidad);
        setCantidad(0);
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
    price: price,
    currency: moneda,
    quantity: quantity,
    company: user ? user.companyID[0] : null,
  };
  // console.log("PRODUCT", product);
  // console.log("PRODUCT TYPEOF", productTypeOff);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createProductAction(product));
    setNombre("");
    setDescripcion("");
    setImageProduct("");
    setCategoria([]);
    setPrice(0);
    setQuantity(0);
  };
  return (
    <form onSubmit={handleSubmit} className="form-createComponent" action="">
    
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
          cantidad={cantidad}
          quantity={product.quantity}
          handleInputQuantityChange={handleInputQuantityChange}
        >
          <CurrencyInput
            name="price"
            prefix={product.currency}
            decimalsLimit={2}
            decimalScale={2}
            allowNegativeValue={false}
            decimalSeparator=","
            value={precio}
            defaultValue={null}
            inputMode="numeric"
            pattern="[0-9]*"
            onValueChange={handleInputPriceChange}
          ></CurrencyInput>
        </PanelOptions>

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
