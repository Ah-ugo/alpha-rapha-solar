import axios from "axios";

export const subscribeNewsLetters = async (email) => {
  try {
    const req = await axios.post(
      "https://alpha-raphasolar-ackend-ah-ugo5658-1fgg5dja.leapcell.dev/subscribe/subscribe",
      JSON.stringify({ email }), // Explicitly convert to JSON string
      {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    console.log(req.data);
    return req.data;
  } catch (e) {
    console.log("Subscription to newsletter failed due to: " + e.message);
    if (e.response) {
      console.error("Error details:", e.response.data); // Log additional error details
    }
  }
};
