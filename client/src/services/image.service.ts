import axios from "axios";

const endpoint = "https://graphqlzero.almansi.me/api";

const services = {
  photosGET: async (limit: number, page: number, search?: string) => {
    return axios.get(`${endpoint}/photos?limit=${limit}&page=${page}${search ? `&title=${search}`: ''}`);
  },

  albumGET: async (id: number, limit: number, page: number, search?: string) => {
    return axios.get(`${endpoint}/album/${id}?limit=${limit}&page=${page}${search ? `&title=${search}`: ''}`);
  },

  albumsGET: async () => {
    return axios.get(`${endpoint}/album`);
  },
};

export default services;
