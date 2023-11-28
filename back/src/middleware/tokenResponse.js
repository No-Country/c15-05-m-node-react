import createAccessToken from "../libs/jwt.js";

const sendTokenResponse = async (user, statusCode, res) => {
    const token = await createAccessToken({ id: user._id });
    const options = {
      maxAge: 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "Lax",
      secure: true,
    };
    // if (process.env.NODE_ENV === "production") {
    //   options.secure = true;
    // }
    res.status(statusCode).cookie("token", token, options).json({
      success: true,
      id: user.id,
      UA: user.UA,
      EUA: user.EUA,
      name: user.name,
    });
  };
  export default sendTokenResponse;