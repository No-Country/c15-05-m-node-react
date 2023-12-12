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
}) => {
  return (
    <Box
      sx={{
        width: "25em",
        p: 2,
        backgroundColor: "white",
        borderRadius: "5px",
      }}
    >
      <h2 className="title-panelOptions">Panel Opciones</h2>
      <div id="formOptions" className="panelOptionsForm-container">
        <h2 className="title-options">Ingresar opciones de producto:</h2>
        <Box sx={{ display: "flex", flexDirection: "row", mt: 0.5 }}></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mt: 0.5,
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mt: 0.5,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="option">Precio:</p>
          <CurrencyInput
            prefix=""
            decimalsLimit={2}
            decimalScale={2}
            allowNegativeValue={false}
            placeholder="Introduce el precio"
            onValueChange={(value) => handleInputPriceChange(value)}
            value={precio}
            name="price"
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            mt: 0.5,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p className="option">Moneda:</p>
          <select
            id="input-options-currency"
            className="input-select-currency"
            onChange={handleInputCurrencyChange}
            value={moneda}
            name="currency"
          >
            {monedas.map((option) => (
              <option key={option.abreviacion} value={option.simbolo}>
                {option.country}
                {":"} {option.abreviacion}
              </option>
            ))}
          </select>
        </Box>
      </div>
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
          Moneda: <p className="previewH3">{currency}</p>
        </h2>
        <h2 className="previewH2">
          Categoría: <p className="previewH3">{category.join(", ")}</p>
        </h2>
        <h2 className="previewH2">
          Precio: <p className="previewH3">{currency}{" "}{price}</p>
        </h2>
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
  category: PropTypes.array.isRequired,
  input: PropTypes.string.isRequired, //categoria
  handleClickPanelOptions: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleInputPriceChange: PropTypes.func.isRequired,
  handleInputCurrencyChange: PropTypes.func.isRequired,
};
export default PanelOptions;
