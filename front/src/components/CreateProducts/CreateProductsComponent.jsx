import { Button } from "@mui/material";
import { useState } from "react";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import ImageUploading from "react-images-uploading";

const CreateProductsComponent = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);

  const handleChangeInput = (event) => {
      event.preventDefault();
    let value = event.target.value;
    let name = event.target.name;
    if(name === "name") setName(value);
    if(name === "description") setDescription(value);
  };
  //IMAGE
  const maxNumber = 69;
  const onChangeImage = (imageList) => {
    const imageUrl = imageList.shift();
    setImage(imageUrl.data_url);
  };
  // New Product
  const newProduct = {
    name,
    description,
    image,
  };
  console.log("newProduct", newProduct);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    alert("PRODUCTO CREADO");
  };

  return (

      <form onSubmit={handleSubmit} id="form">
      
        <h2>CREA TU PRODUCTO</h2>

        <input
            id="nameProduct"
          onChange={handleChangeInput}
          type="text"
          name="name"
          value={name}
          autoComplete="true"
          autoFocus={true}
          placeholder="Nombre Producto"
        />
        {/* ************ Descripción ************************* */}
        <div >
        <textarea
         id="description"
          onChange={handleChangeInput}
          type="text"
          name="description"
          value={description}
          autoFocus={true}
          autoComplete="true"
          placeholder="Descripción del Producto"
          />
        </div>
        {/* ***************** Imagen **************** */}
        <div>

          <ImageUploading
            id="image"
            name="image"
            value={image}
            onChange={onChangeImage}
            maxNumber={maxNumber}
            dataURLKey="data_url"
          >
            {({
               onImageUpload,
               onImageRemove,
              isDragging,
              dragProps,
            }) => (
          
              <div >
                <div key={"url"} >
                  <img src={image} alt="imageUpload" width="100" />
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
                    Upload
                    <AddPhotoAlternateOutlinedIcon />
                  </button>
                  <button
                    type="button"
                    className="buttonUploadImage"
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageRemove}
                    {...dragProps}
                  >
                    Remove
                    <DeleteOutlineOutlinedIcon />
                  </button>
                </div>
              </div>
            )}
          </ImageUploading>
        </div>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          elevation={0}
          sx={{
            height: "3em",
            backgroundColor: "#00bcd4",
            borderRadius: "15px",
            justifyContent: "center",
            ["&:hover"]: { backgroundColor: "#B2EBF2", color: "#00BCD4", },
            boxShadow:" 0px 4.46881px 4.46881px 0px rgba(0, 0, 0, 0.25)"
          }}
        >
          CREAR
        </Button>
      </form>
  );
};

export default CreateProductsComponent;
