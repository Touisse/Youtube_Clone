import axios from "axios";
const BASE_URL = "https://youtube-v31.p.rapidapi.com/captions";
const options = {
  params: { part: "snippet", videoId: "M7FIvfx5J10" },
  headers: {
    "X-RapidAPI-Key": "357649c602mshdda2360a8495042p1bfa68jsn8b1be504d963",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
	return data;
  };
