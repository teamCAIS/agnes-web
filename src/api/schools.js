import { api } from "./config";

export const getSchools = async (page=1, filters={}) => {
    let query = `?page=${page}`
    for(let prop in filters) {
        if(!filters[prop]) continue;
        query = query + `&${prop}=${filters[prop]}`;
    }
    const result = await api.get(`/schools/${query}`);
    return result;
}

export const evaluate = async (payload, token) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    const result = await api.post(`/evaluations/`, payload, config);
    return result;
}
