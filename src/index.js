import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import SeatBookingApp from './containers/SeatBookingApp';
import reducer from './reducers';
import { getAllSeats } from './actions';


const middleware = [thunk];
// middleware will print the logs for state changes
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

store.dispatch(getAllSeats());

/* eslint-disable no-undef */
render(
  <Provider store={store}>
    <SeatBookingApp />
  </Provider>,
  document.getElementById('root'),
);
