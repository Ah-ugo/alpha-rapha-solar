import axios from "axios";

export async function LoadAllProducts() {
  const resp = await axios.get(
    "https://alpha-rapha-solar-backend.vercel.app/products/"
  );
  console.log(resp.data, "hello===");
  return resp.data;
}

export async function GetProductById(id) {
  const resp = await axios.get(
    `https://alpha-rapha-solar-backend.vercel.app/products/${id}`
  );
  console.log(resp.data, "lello===");
  return resp.data;
}
