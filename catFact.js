import axios from "axios";

export const getCatFact = async () => {
  try {
    const response = await axios.get("https://catfact.ninja/fact", { timeout: 10000 });
    return response.data.fact;
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);
    throw new Error("Failed to fetch cat fact");
  }
};
