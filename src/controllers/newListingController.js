const axios = require('axios');

const postListing = async (newListing) => {
  try {
    const res = await axios({
      method: 'post',
      url: `http://tiny-car-list-api.herokuapp.com/listing`,
      data: newListing,
      headers: {
        authorizer: newListing.password,
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    const res = error.response.status;
    return res;
  }
};

export default postListing;
