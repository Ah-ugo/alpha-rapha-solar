import axios from "axios";

// Load all products
export async function LoadAllProducts() {
  try {
    const resp = await axios.get(
      "https://alpha-rapha-solar-backend.vercel.app/products/"
    );
    console.log("Loaded Products: ", resp.data);
    return resp.data;
  } catch (error) {
    console.error(
      "Error loading products: ",
      error.response?.data || error.message
    );
    throw error;
  }
}

// Load product by ID
export async function GetProductById(id) {
  try {
    const resp = await axios.get(
      `https://alpha-rapha-solar-backend.vercel.app/products/${id}`
    );
    console.log(`Product with ID ${id} Loaded: `, resp.data);
    return resp.data;
  } catch (error) {
    console.error(
      `Error loading product with ID ${id}: `,
      error.response?.data || error.message
    );
    throw error;
  }
}

export async function AddReview(input, id) {
  try {
    const response = await axios.post(
      `https://alpha-rapha-solar-backend.vercel.app/reviews/${id}`,
      input,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${localStorage.getItem("alpharapha_token")}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in AddReview:", error);
    throw error;
  }
}
