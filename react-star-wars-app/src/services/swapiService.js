import axios from "axios";

const API_URL ="https://swapi.py4e.com/api";

export const getCharacters = async (page = 1) => {
    try {
        const response = axios.get(`${API_URL}/people/?page=${page}`);
        return (await response).data;

    } catch (error) {
        console.error("Error fetchigng characters: ", error);
        throw error;
    }
}

export const getCharacter = async () => {
    try {
        const response = await axios.get(`${API_URL}/people/${}`)
        return response.data;
    } catch (error) {
        console.error("Tuvimos un error buscando el personaje : ", error);
        throw error;
    }
}