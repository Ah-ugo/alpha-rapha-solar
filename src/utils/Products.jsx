import axios from "axios";

// Define primary and backup API URLs
const API_URL_PRIMARY = "https://alpha-rapha-solar-backend.vercel.app";
const API_URL_SECONDARY = "https://alpha-rapha-solar-backend.onrender.com";

// Helper function to make requests with fallback
async function apiRequest(endpoint, options = {}) {
  try {
    // Attempt request with primary API URL
    const response = await axios({
      ...options,
      url: `${API_URL_PRIMARY}${endpoint}`,
    });
    return response.data;
  } catch (primaryError) {
    console.error("Primary API failed, attempting secondary:", primaryError);
    try {
      // Attempt request with secondary API URL
      const response = await axios({
        ...options,
        url: `${API_URL_SECONDARY}${endpoint}`,
      });
      return response.data;
    } catch (secondaryError) {
      console.error("Secondary API also failed:", secondaryError);
      throw new Error("Both primary and secondary APIs failed.");
    }
  }
}

// Load all products with fallback
export async function LoadAllProducts() {
  return await apiRequest("/products/");
}

// Load product by ID with fallback
export async function GetProductById(id) {
  return await apiRequest(`/products/${id}`);
}

// Add review with fallback
export async function AddReview(input, id) {
  const token = localStorage.getItem("alpharapha_token");
  return await apiRequest(`/reviews/${id}`, {
    method: "POST",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: input,
  });
}
