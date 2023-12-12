import "./CreateProducts.css";
import PropTypes from "prop-types";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import imageDefault from "../../assets/logo.svg"
import ImageUploading from "react-images-uploading";
import { Box } from "@mui/material";
import imageDefault from "../../assets/Imagenes/logoFlecha.png";

const PanelCrearProducto = ({
  nombre,
  descripcion,
  imageProduct,
  onChangeImage,
  handleInputDescriptionChange,
  handleInputNameChange,
}) => {
  //IMAGE
  const maxNumber = 69;

  return (
    <Box
      sx={{
        width: "40em",
        p: 2,
        backgroundColor: "white",
        borderradius: "5px",
      }}
    >
      <div id="formCreateProduct" className="panelCreate-container">
        <h2 className="title-createproduct">CREAR PRODUCTO</h2>
        <label
          id="inputlabel-name"
          htmlFor="nameProduct"
          className="input-label"
        >
          Nombre del Producto
        </label>
        <input
          id="nameProduct"
          type="text"
          autoComplete="true"
          autoFocus={true}
          placeholder="Nombre Producto"
          className="input-name"
          onChange={handleInputNameChange}
          value={nombre}
          name="name"
        />{" "}
        {/* ************ Descripción ************************* */}
        <label
          id="inputlabel-description"
          htmlFor="descriptionProduct"
          className="input-label"
        >
          Descripción del Producto
        </label>
        <textarea
          id="descriptionProduct"
          onChange={handleInputDescriptionChange}
          type="text"
          name="description"
          value={descripcion}
          autoFocus={true}
          autoComplete="true"
          placeholder="Descripción del Producto"
          className="input-description"
        />
        {/* ***************** Imagen **************** */}
        <p htmlFor="imgProduct" className="input-label">
          Imagen del Producto
        </p>
        <div className="imageProduct-container">
          <ImageUploading
            id="imgProduct"
            name="imageProduct"
            value={imageProduct}
            onChange={onChangeImage}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({ onImageUpload, onImageRemove, isDragging, dragProps }) => (
              <div className="container-image-bottons">
                <div key={"url"} className="image-createProducts">
                  <img src={!imageProduct ? imageDefault : imageProduct} alt="imageUpload" width="100" />
                </div>
                &nbsp;
                <div className="buttonsContainer">
                  <button
                    type="button"
                    className="buttonUploadImage"
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <AddPhotoAlternateOutlinedIcon sx={{ mr: 1 }} />
                    Agregar imagen
                  </button>
                  <button
                    type="button"
                    className="buttonUploadImage"
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageRemove}
                    {...dragProps}
                  >
                    <DeleteOutlineOutlinedIcon sx={{ mr: 1 }} />
                    Borrar
                  </button>
                </div>
              </div>
            )}
          </ImageUploading>
        </div>
      </div>
    </Box>
  );
};
PanelCrearProducto.propTypes = {
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imageProduct: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleInputNameChange: PropTypes.func.isRequired,
  handleInputDescriptionChange: PropTypes.func.isRequired,
  onChangeImage: PropTypes.func.isRequired,
};
export default PanelCrearProducto;
