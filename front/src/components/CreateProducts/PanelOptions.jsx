import { Box, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import PropTypes from "prop-types";
import monedas from "../../assets/Monedas.json";

const PanelOptions = ({
  nombre,
  description,
  imageProduct,
  moneda,
  precio,
  category,
  handleClickPanelOptions,
  handleInputChange,
  handleInputNumberChange,
  handleInputCurrencyChange,
  input,
}) => {
  console.log("PRICE", typeof precio);
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
          <h3 className="option">Categoría:</h3>
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
          <h3 className="option">Precio:</h3>
          <input
            id="input-number"
            type="text"
            className="input-select"
            onChange={handleInputNumberChange}
            value={precio}
            name="price"
            step="0.1"
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
          <h3 className="option">Moneda:</h3>
          <select
            id="input-options-currency"
            className="input-select-currency"
            onChange={handleInputCurrencyChange}
            value={moneda}
            name="currency"
            defaultValue="Moneda"
          >
            {Object.keys(monedas).map((key) => (
              <option key={key} value={monedas[key].abreviacion}>
                {key}
              </option>
            ))}
            {/* {Object.keys(monedas).map((key) => (
              <option key={key} value={key}>
                {monedas[key].simbolo} ({monedas[key].abreviacion})
              </option>
            ))} */}
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
          Nombre: <h3 className="previewH3">{nombre}</h3>
        </h2>
        <h2 className="previewH2">
          Descripción: <h3 className="previewH3">{description}</h3>
        </h2>
        <h2 className="previewH2">
          Moneda: <h3 className="previewH3">{moneda}</h3>
        </h2>
        <h2 className="previewH2">
          Categoría: <h3 className="previewH3">{category.join(" ,")}</h3>
        </h2>
        <h2 className="previewH2">
          Precio: <h3 className="previewH3">{precio}</h3>
        </h2>
      </Box>
    </Box>
  );
};
PanelOptions.propTypes = {
  nombre: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  moneda: PropTypes.string.isRequired,
  categoria: PropTypes.array.isRequired,
  imageProduct: PropTypes.string.isRequired,
  category: PropTypes.array.isRequired,
  precio: PropTypes.number.isRequired,
  handleClickPanelOptions: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired, //categoria
  handleInputNumberChange: PropTypes.func.isRequired,
  handleInputCurrencyChange: PropTypes.func.isRequired,
};
export default PanelOptions;
