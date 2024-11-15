import { Brand } from "@/interfaces";
import { getEnvVariables } from "@/utils/getEnvVariables";

const { VITE_API_URL } = getEnvVariables();

export const getAllBrands = async (): Promise<Brand[]> => {
  try {
    const response = await fetch(`${VITE_API_URL}/brands`);

    if (!response.ok) {
      throw new Error('Error fetching brands');
    }

    const data = await response.json();
    console.log("Fetched brands:", data);

    return data.object;
  } catch (error) {
    console.error('Failed to fetch brands:', error);
    throw error;
  }
};
