import axios from "axios";

// Login function with error handling and token storage
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

    // Store token with standardized key name
    localStorage.setItem("alpharapha_token", resp.data.access_token);
    return resp.data;
  } catch (error) {
    console.error("Login Error: ", error.response?.data || error.message);
    throw error;
  }
}

// Register function with error handling and optional token storage
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

    // Optionally store token if provided in the response and storeToken is true
    if (storeToken && resp.data.access_token) {
      localStorage.setItem("alpharapha_token", resp.data.access_token);
    }
    return resp.data;
  } catch (error) {
    console.error("Register Error: ", error.response?.data || error.message);
    throw error;
  }
}
