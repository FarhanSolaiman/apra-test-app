import axios from "axios";
import { IAlbumDataPayload, IAlbumsDataPayload, IImageDataPayload } from "src/types/image.type";

const photosEndpoint = "https://448uudiqaa.execute-api.us-east-1.amazonaws.com/";
const albumEndpoint = "https://i3upej9w77.execute-api.us-east-1.amazonaws.com/";
const albumsEndpoint = "https://75yyeanegb.execute-api.us-east-1.amazonaws.com/";

const services = {
  photosGET: async (limit?: number, page?: number, search?: string) => {
    return axios.get<IImageDataPayload, IImageDataPayload>(`${photosEndpoint}photos${limit || page || search ? '?' : ''}${limit ? `&limit=${limit}`: ''}${page ? `&page=${page}`:''}${search ? `&title=${search}`: ''}`);
  },

  albumGET: async (id: number, limit: number, page: number, search?: string) => {
    return axios.get<IAlbumDataPayload, IAlbumDataPayload>(`${albumEndpoint}album/${id}?limit=${limit}&page=${page}${search ? `&title=${search}`: ''}`);
  },

  albumsGET: async () => {
    return axios.get<IAlbumsDataPayload, IAlbumsDataPayload>(`${albumsEndpoint}albums`);
  },
};

export default services;
