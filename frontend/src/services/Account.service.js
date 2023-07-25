import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getAllGames = async () => {
  try {
    const url = `${baseUrl}/games`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const getPromotedVideos = async () => {
  try {
    const url = `${baseUrl}/videos?isPromoted=1`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const getPopularVideos = async () => {
  try {
    const url = `${baseUrl}/videos?isPopular=1&treshold=1`;
    const { data } = await axios(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};
