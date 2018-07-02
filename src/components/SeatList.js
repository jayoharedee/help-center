import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable */
const SeatList = ({ title, children }) => (
  <div>
    <h3>
      {title}
    </h3>
    <ol className="list">
      {children}
    </ol>
  </div>

);
SeatList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default SeatList;
