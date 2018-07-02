import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
const Cart = ({ seats, total, onCheckoutClicked }) => { // eslint-disable-line
  const hasSeats = seats.length > 0;
  const nodes = hasSeats ? (

    seats.map(seat => (
      <div>
        Seat Number:
        {' '}
        {seat.number}
        {' '}
- Price:
        {' '}
        {seat.price}
      </div>
    ))

  ) : (
    <em>
No seats selected
    </em>
  );

  return (
    <div>
      <b>
Selected Seats
      </b>
      {' '}
      <br />
      {nodes}
      {' '}
      <br />
      <b>
Total
      </b>
      {' '}
      <br />
      {total}
      <br />
      <button type="button" onClick={onCheckoutClicked}>
        Checkout
      </button>
    </div>
  );
};

Cart.propTypes = {
  seats: PropTypes.any, // eslint-disable-line
  total: PropTypes.any, // eslint-disable-line
  onCheckoutClicked: PropTypes.any, // eslint-disable-line
};

export default Cart;
