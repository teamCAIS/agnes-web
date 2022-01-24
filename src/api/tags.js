import { api } from "./config";

export const getTags = async () => {
    const result = await api.get(`/tags`);
    return result;
}