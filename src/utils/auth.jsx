import axios from "axios";

// Login function
export async function LoginUser(formData, urls) {
  for (const url of urls) {
    try {
      const resp = await axios.post(`${url}/user/token`, formData, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      console.log("Login Response: ", resp.data);

      localStorage.setItem("alpharapha_token", resp.data.access_token);
      localStorage.setItem("alphrapha_details", JSON.stringify(resp.data));
      return resp.data;
    } catch (error) {
      console.error(
        `Login Error at ${url}: `,
        error.response?.data || error.message
      );
      // Continue to the next URL if this one fails
    }
  }
  throw new Error("All servers are down or unreachable");
}

// Register function
export async function RegisterUser(formData, urls, storeToken = false) {
  for (const url of urls) {
    try {
      const resp = await axios.post(`${url}/user/register`, formData, {
        headers: {
          accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      console.log("Register Response: ", resp.data);

      if (storeToken && resp.data.access_token) {
        localStorage.setItem("alpharapha_token", resp.data.access_token);
      }
      return resp.data;
    } catch (error) {
      console.error(
        `Register Error at ${url}: `,
        error.response?.data || error.message
      );
      // Continue to the next URL if this one fails
    }
  }
  throw new Error("All servers are down or unreachable");
}
