import { createReducer } from 'store/utils';
import * as types from './types';

const modalInitState = {
  songs: [],
};

const modalReducer = createReducer(modalInitState)({
  [types.GET_SONGS]: (state, { payload }) => ({
    ...state,
    songs: payload
  })
});

export default modalReducer;
