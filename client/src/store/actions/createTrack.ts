import axios from 'axios';

export const createTrack = async (formData, router) => {
  const URL = process.env.API_URL;

  try {
    await axios.post(`${URL}tracks`, formData);
    router.push('/tracks');
  } catch (err) {
    console.log('err', err);
    return err;
  }
};
