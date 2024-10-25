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

export async function AddReview(input, id) {
  const resp = await axios.post(
    `https://alpha-rapha-solar-backend.vercel.app/reviews/${id}`,
    input,
    {
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("alpharapha_token==")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  return resp.data;
}
