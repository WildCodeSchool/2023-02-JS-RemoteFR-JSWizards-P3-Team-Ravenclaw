import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const updateFavs = async (body) => {
  try {
    const url = `${baseUrl}/userVideo`;
    const { data } = await axios.put(url, body);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const getOneFav = async (userId, videoId) => {
  try {
    const url = `${baseUrl}/userVideo?user_id=${userId}&video_id=${videoId}`;
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const postFav = async (newFav) => {
  try {
    const url = `${baseUrl}/userVideo`;
    const { data } = await axios.post(url, newFav);
    return data;
  } catch (error) {
    return { data: [] };
  }
};

export const deleteFav = async (data) => {
  try {
    const url = `${baseUrl}/userVideo`;
    return axios.delete(url, data);
  } catch (error) {
    return { data: [] };
  }
};

export const unfavoriteVideo = (videoId, userId) => {
  return axios.put(`${baseUrl}/user-video/`, {
    user_id: userId,
    video_id: videoId,
    is_favorite: 0,
  });
};
