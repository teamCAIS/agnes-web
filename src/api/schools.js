import { api } from "./config";

export const getSchools = async (page=1, filters={}) => {
    let query = `?page=${page}`
    for(let prop in filters) {
        query = query + `&${prop}=${filters[prop]}`;
    }
    const result = await api.get(`/schools/${query}`);
    return result;
}
