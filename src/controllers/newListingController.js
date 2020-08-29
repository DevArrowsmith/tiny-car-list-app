const axios = require('axios');

const postListing = async (newListing) => {
  try {
    const res = await axios({
      method: 'post',
      url: `https://tiny-car-list-api.herokuapp.com/listing`,
      data: newListing,
      headers: {
        Authorizer: newListing.authorization,
      },
    });
    return res;
  } catch (error) {
    const res = error.response.status;
    return res;
  }
};

export default postListing;
