import axios from "axios";

// Login function
export async function LoginUser(formData) {
  try {
    const resp = await axios.post(
      "https://alpha-rapha-solar-backend.vercel.app/user/token",
      formData,
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log("Login Response: ", resp.data);

    localStorage.setItem("alpharapha_token", resp.data.access_token);
    localStorage.setItem("alphrapha_details", JSON.stringify(resp.data));
    return resp.data;
  } catch (error) {
    console.error("Login Error: ", error.response?.data || error.message);
    throw error;
  }
}

// Register function
export async function RegisterUser(formData, storeToken = false) {
  try {
    const resp = await axios.post(
      "https://alpha-rapha-solar-backend.vercel.app/user/register",
      formData,
      {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log("Register Response: ", resp.data);

    if (storeToken && resp.data.access_token) {
      localStorage.setItem("alpharapha_token", resp.data.access_token);
    }
    return resp.data;
  } catch (error) {
    console.error("Register Error: ", error.response?.data || error.message);
    throw error;
  }
}
