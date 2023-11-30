import cloudinary from "cloudinary";
const { cloud_name, api_key, api_secret } = process.env;

export const uploadImage = async (images) => {
  cloudinary.config({
    cloud_name: cloud_name,
    api_key: api_key,
    api_secret: api_secret,
    secure: true,
  });

  // Upload
  const result = cloudinary.uploader.upload(images, {
    folder: "iPunto",
    width: 2400,
    crop: "scale",
    sign_url: true, 
    type: "authenticated"
  });
  result
    .then((data) => {
      "success", JSON.stringify(data.secure_url, data.public_id, 2);
      // console.log("data cloudinary", data.public_id);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
  const infoImage = await result;

  return infoImage;
};