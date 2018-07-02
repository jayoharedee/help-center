import {
  getSeats,
  bookSelSeats,
} from '../api/service';
import {
  GET_SEATS,
  ADD_TO_CART,
  CHECKOUT,
} from '../constants/ActionTypeConstants';

/* eslint-disable */
// action creator for getting seats
const fetchSeats = rows => ({
  type: GET_SEATS,
  rows,
});

// action getAllSeats
export const getAllSeats = () => (dispatch) => {
  getSeats().then((rows) => {
    dispatch(fetchSeats(rows));
  });
};

// action creator for add seat to cart
const addToCart = seat => ({
  type: ADD_TO_CART,
  seat,
});

export const addSeatToCart = seat => (dispatch, getState) => {
  dispatch(addToCart(seat));
};

export const bookSeatsSel = seats => (dispatch, getState) => {
  const {
    cart,
  } = getState();

  bookSelSeats(seats).then(() => {
    dispatch({
      type: CHECKOUT,
      cart,
    });
  });
};
