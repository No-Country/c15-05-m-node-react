import "./EditProducts.css";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProductAction } from "../../redux/actionsProducts";
import CurrencyInput from "react-currency-input-field";
import PanelEditName from "./PanelEditName";
import PanelEditOptions from "./PanelEditOptions";
import imageDefault from "../../assets/Imagenes/logoFlecha.png";

// import { useParams } from "react-router-dom";

const EditProductComponent = () => {
  const { user } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [selectValue, setSelectValue] = useState("");

  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imageProduct, setImageProduct] = useState("");
  const [imageOBJ, setImageOBJ] = useState({});
  const [categoria, setCategoria] = useState([]);
  const [precio, setPrecio] = useState(0);
  const [price, setPrice] = useState(0);
  const [moneda, setMoneda] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [idEdit, setIdEdit] = useState(""); //id
  const array = [];

  //ProductEdit
  const handleInputEditChange = (event) => {
    setSelectValue(event.target.name);
    setIdEdit(event.target.value);
  };
  useEffect(() => {
    const foundProduct = products.find((product) => product._id === idEdit);
    if (foundProduct) {
      setNombre(foundProduct.name);
      setDescripcion(foundProduct.description)
      setImageProduct(foundProduct.image.url)
      setImageOBJ(foundProduct.image)
      setCategoria(foundProduct.category)
      setInput(foundProduct.category.join(","))
      setPrice(foundProduct.price)
      setPrecio(foundProduct.price)
      setMoneda(foundProduct.currency)
      setCantidad(foundProduct.quantity)
      setQuantity(foundProduct.quantity)
    } else {
      setNombre("");
      setDescripcion("")
      setImageProduct("")
      setImageOBJ({})
      setCategoria([])
      setPrecio(0)
      setMoneda("")
      setCantidad(0)
    }
  }, [idEdit, products]);
  //Imagen
  const onChangeImage = (imageList) => {
    const imageUrl = imageList.shift();
    if(!imageProduct){
      setImageProduct(imageDefault) 
    }
    setImageProduct(imageUrl.data_url);
    // console.log("IMAGELIST", imageUrl);
    // console.log("IMAGEPRODUCT COMPONENT", typeof imageUrl);
    
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
      // case "edit":
      //   if (productEdit) {
      //     setNombre(productEdit.nombre)
      //   }
      //   break;
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

  const editProduct = {
    name: nombre,
    description: descripcion,
    image: imageOBJ.url !== imageProduct ? imageProduct : imageOBJ.url,
    category: categoria,
    price: price,
    currency: moneda,
    quantity: quantity,
    company: user ? user.companyID[0] : null,
  };
// console.log("EDITPRODUCT", editProduct);
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editProductAction(idEdit, editProduct));
    setNombre("");
    setDescripcion("");
    setImageProduct(imageDefault);
    setImageOBJ({});
    setCategoria([]);
    setPrice(0);
    setQuantity(0);
    setIdEdit("")
  };
  return (
    <form onSubmit={handleSubmit} className="form-createComponent" action="">
      <PanelEditName
        nombre={nombre}
        descripcion={descripcion}
        imageProduct={imageProduct}
        handleInputEditChange={handleInputEditChange}
        handleInputNameChange={handleInputNameChange}
        handleInputDescriptionChange={handleInputDescriptionChange}
        onChangeImage={onChangeImage}
        idEdit={idEdit}
      />

      <PanelEditOptions
        nombre={editProduct.name}
        descripcion={descripcion}
        imageProduct={imageProduct}
        price={editProduct.price}
        moneda={moneda}
        currency={editProduct.currency}
        precio={precio}
        category={editProduct.category}
        input={input}
        handleClickPanelOptions={handleClickPanelOptions}
        handleInputChange={handleInputChange}
        handleInputPriceChange={handleInputPriceChange}
        handleInputCurrencyChange={handleInputCurrencyChange}
        cantidad={cantidad}
        quantity={editProduct.quantity}
        handleInputQuantityChange={handleInputQuantityChange}
        idEdit={idEdit}
      >
        <CurrencyInput
          name="price"
          prefix={editProduct.currency}
          decimalsLimit={2}
          decimalScale={2}
          allowNegativeValue={false}
          decimalSeparator=","
          value={precio}
          defaultValue={0}
          inputMode="numeric"
          pattern="[0-9]*"
          onValueChange={handleInputPriceChange}
        ></CurrencyInput>
      </PanelEditOptions>

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
        EDITAR PRODUCTO
      </Button>
    </form>
  );
};

export default EditProductComponent;
