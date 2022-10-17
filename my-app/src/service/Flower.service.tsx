import { http } from "../utils/Http";

export type Flower = {
    id: number,
    name: string,
    latin_name: string,
    sightings: number,
    profile_picture: string,
    favorite: boolean
};

export const fetchFlowers = async (): Promise<any> => {
    return await http.get("/v1/flowers");
};

export const searchFlowers = async (searchTerm: any): Promise<any> => {
    return await http.get("/v1/flowers/search?query=" + searchTerm);
  };