const axios = require('axios');

const postListing = async (newListing) => {
  try {
    const res = await axios({
      method: 'post',
      url: `http://tiny-car-list-api.herokuapp.com/listing`,
      data: newListing,
    });
    console.log(res);
    return res;
  } catch (error) {
    return error;
  }
};

export default postListing;
