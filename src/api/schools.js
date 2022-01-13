import { api } from "./config";

export const getSchools = async (page=1) => {
  try {
    const result = await api.get(`/schools/?page=${page}`);
    return result
  } catch(error) {
    console.warn(error)
    return {error: true}
  }
}
