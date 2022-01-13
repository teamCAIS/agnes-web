import { api } from "./config";

export const getSchools = async (page=1) => {
    const result = await api.get(`/schools/?page=${page}`);
    return result
}
