import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "matt-test",
  api_key: "182634237986966",
  api_secret: "dLrQ7NgkICYDTi3kTv52-ngSbVY",
});

module.exports = async (file) => {
  try {
    const res = await cloudinary.uploader.upload(file);
    return res.secure_url;
  } catch (error) {
    return error;
  }
};