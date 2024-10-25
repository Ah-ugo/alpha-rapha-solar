import axios from "axios";

export async function LoginUser(formData) {
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
  console.log(resp.data);
  localStorage.setItem("alpharapha_token==", resp.data.access_token);
  return resp.data;
}

export async function RegisterUser(formData) {
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
  console.log(resp.data);
  // localStorage.setItem("alpharapha_token==", resp.data.access_token);
  return resp.data;
}
