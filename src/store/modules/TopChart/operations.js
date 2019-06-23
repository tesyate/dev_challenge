import request from 'app/utils/request';
import { setSongs } from './actions';

export const getSongs = () => async (dispatch) => {
  try {
    const { data } = await request.get('');
    console.log(data);
    dispatch(setSongs(data.data));
  } catch (err) {
    console.error(err);
  }
};
