import { Bus } from "@/interfaces";
import { getEnvVariables } from "@/utils/getEnvVariables";
import { ApiResponse } from "@/interfaces";

const { VITE_API_URL } = getEnvVariables();


export const getAllBuses = async (page: number = 0, size: number = 5): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${VITE_API_URL}/bus?page=${page}&size=${size}`);

    if (!response.ok) {
      throw new Error('Error fetching buses');
    }

    const data: ApiResponse = await response.json();
    console.log("Fetched buses:", data);

    return data;
  } catch (error) {
    console.error('Failed to fetch buses:', error);
    throw error;
  }
};

export const getBusById = async (id: number): Promise<Bus> => {
  try {
    const response = await fetch(`${VITE_API_URL}/bus/${id}`);

    if (!response.ok) {
      throw new Error(`Error fetching bus with ID: ${id}`);
    }

    const data = await response.json();
    console.log("Fetched bus:", data);

    return data.object;
  } catch (error) {
    console.error(`Failed to fetch bus with ID: ${id}`, error);
    throw error;
  }
};

