import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bookSeatsSel } from '../actions';
import { getTotal, getCartSeats } from '../reducers';
import Cart from '../components/Cart';

const CartContainer = ({ seats, total }) => (
  <Cart
    seats={seats}
    total={total}
    onCheckoutClicked={() => bookSeatsSel(seats)}
  />
);

CartContainer.propTypes = {
  seats: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number.isRequired,
    rowNo: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  })).isRequired,
  total: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  seats: getCartSeats(state),
  total: getTotal(state),
});

export default connect(mapStateToProps, { bookSeatsSel })(CartContainer);
