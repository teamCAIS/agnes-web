import { api } from "./config";

export const login = async (email, password) => {
    const result = await api.post(`/authentication/`, {
      email,
      password,
    });
    return result;
}
