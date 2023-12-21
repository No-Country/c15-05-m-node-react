import { Box, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import PropTypes from "prop-types";
import monedas from "../../assets/Monedas.json";
import CurrencyInput from "react-currency-input-field";

const PanelOptions = ({
  nombre,
  description,
  imageProduct,
  price,
  moneda,
  currency,
  precio,
  category,
  handleClickPanelOptions,
  handleInputChange,
  handleInputPriceChange,
  handleInputCurrencyChange,
  input,
  quantity,
  handleInputQuantityChange,
  cantidad,
  handleDeleteInput
}) => {

  return (
    <Box
      sx={{
        display:"flex",
        width: "25em",
        p: 2,
        backgroundColor: "white",
        borderRadius: "5px",
        // border: "1px solid red",
      }}
    >
      <Box sx={{ width: "100%"}}>
      <h2 className="title-panelOptions">Panel Opciones</h2>
      <div id="formOptions" className="panelOptionsForm-container">
        <h2 className="title-options">Ingresar opciones de producto:</h2>

        {/* CATEGORIA */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mt: 0.5,
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="option">Categoría:</p>
          <input
            id="input-options-category"
            type="text"
            className="input-select"
            placeholder="Nuevo valor"
            onChange={handleInputChange}
            value={input}
            name="category"
          />
          <Button
            type="submit"
            variant="contained"
            elevation={0}
            onClick={handleClickPanelOptions}
            sx={{
              marginLeft: ".5em",
              height: "2.8em",
              backgroundColor: "#00bcd4",
              borderRadius: "5px",
              justifyContent: "center",
              ["&:hover"]: { backgroundColor: "#B2EBF2", color: "#00BCD4" },
            }}
          >
            <SaveIcon />
          </Button>
        </Box>
        {/* PRECIO Y MONEDA */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mt: 0.5,
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          {/*MONEDA*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              mt: 0.5,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p className="option-moneda-label">Moneda:</p>
            <select
              id="input-options-currency"
              className="input-select-currency"
              onChange={handleInputCurrencyChange}
              value={moneda}
              name="currency"
            >
              {monedas.map((option) => (
                <option
                  className="option-select-currency"
                  key={option.abreviacion}
                  value={option.simbolo}
                >
                  {option.country}
                  {":"} {option.abreviacion}
                </option>
              ))}
            </select>
          </Box>
          {/*PRECIO*/}
          <p className="option-precio-label">Precio:</p>
          <CurrencyInput
          id={precio}
            value={precio}
            onValueChange={handleInputPriceChange}
            className="input-precio-panelOptions"
            onFocus={handleDeleteInput}
          />

          <Button
            type="submit"
            variant="contained"
            elevation={0}
            onClick={handleClickPanelOptions}
            sx={{
              marginLeft: ".9em",
              height: "2.8em",
              backgroundColor: "#00bcd4",
              borderRadius: "5px",
              justifyContent: "center",
              ["&:hover"]: { backgroundColor: "#B2EBF2", color: "#00BCD4" },
            }}
          >
            <SaveIcon />
          </Button>
        </Box>
      </div>
        {/* CANTIDAD*/}
        <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mt: ".5em",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p className="option">Cantidad:</p>
         <input
          className="input-quantity"
          type="number"
          name="quantity"
          value={cantidad}
          onChange={handleInputQuantityChange}
          placeholder="Cantidad de Productos"
        />
        <Button
          type="submit"
          variant="contained"
          elevation={0}
          onClick={handleClickPanelOptions}
          sx={{
            marginLeft: ".6em",
            height: "2.8em",
            backgroundColor: "#00bcd4",
            borderRadius: "5px",
            justifyContent: "center",
            ["&:hover"]: { backgroundColor: "#B2EBF2", color: "#00BCD4" },
          }}
        >
          <SaveIcon />
        </Button>
      </Box>
      {/*VISTA PREVIA*/}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid grey",
          borderRadius: "8px",
          p: 1,
          mt: 2,
          mr: 4,
          ml: 4,
          mb: 1,
          fontFamily: "Barlow Condensed",
          fontWeight: "500",
        }}
      >
        
        <Box sx={{ height: "6em", alignSelf: "center" }}>
          <img src={imageProduct} width="120"></img>
        </Box>
        <h2 className="previewH2">
          Nombre: <p className="previewH3">{nombre}</p>
        </h2>
        <h2 className="previewH2">
          Descripción: <p className="previewH3">{description}</p>
        </h2>
        <h2 className="previewH2">
          Cantidad: <p className="previewH3">{quantity}</p>
        </h2>
        <h2 className="previewH2">
          Categoría: <p className="previewH3">{category.join(", ")}</p>
        </h2>
        <h2 className="previewH2">
          Precio:{" "}
          <p className="previewH3">
            {currency} {price}
          </p>
        </h2>
      </Box>
      </Box>
    </Box>
  );
};
PanelOptions.propTypes = {
  nombre: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageProduct: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  moneda: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  cantidad: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  category: PropTypes.array.isRequired,
  input: PropTypes.string.isRequired, //categoria
  handleClickPanelOptions: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleInputPriceChange: PropTypes.func.isRequired,
  // onValueChange: PropTypes.func.isRequired,
  handleInputCurrencyChange: PropTypes.func.isRequired,
  // nameInputPrice:PropTypes.string.isRequired,
  handleInputQuantityChange: PropTypes.func.isRequired,
  handleDeleteInput: PropTypes.func.isRequired,
};
export default PanelOptions;
