const axios = require("axios");
require("dotenv").config();

const accessKey = process.env.UNSPLASH_ACCESS_KEY; // replace with your Unsplash access key

function searchImage(query) {
  return axios
    .get(`https://api.unsplash.com/search/photos?query=${query}`, {
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    })
    .then((response) => {
      return response.data; // returns the response data
    })
    .catch((error) => {
      throw error; // throws an error if there is one
    });
}

// Example usage:
searchImage("nature")
  .then((data) => {
    console.log(data); // prints the response data to the console
  })
  .catch((error) => {
    console.log(error); // prints the error to the console if there is one
  });
