import axios from "axios";

const accessKey = process.env.REACT_APP_UNSPLASH_KEY;

const searchImage = async (query) => {
  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
      params: {
        query: query,
      },
    });
    return response.data.results; // returns the response data
  } catch (error) {
    throw error; // throws an error if there is one
  }
};

export default searchImage;
