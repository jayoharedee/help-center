/* eslint-disable */
import React, { Component } from 'react';
import './App.css';
import SeatList from './components/SeatList';
import Cart from './components/Cart';
import { getSeats } from './api/service.js';
import SeatRow from './components/SeatRow';

class App extends Component {
  constructor() {
    super();
    this.state = {
      seatrows: [],
    };
  }

  componentDidMount() {
    const _this = this;
    getSeats().then((list) => {
      console.log(list);
      _this.setState({
        seatrows: list,
      });
    });
  }

  render() {
    return (
      <div className="layout">
        <SeatList title="Seats">
          {this.state.seatrows.map((row, index) => (
            <SeatRow
              seats={row.seats}
              key={index}
            />
          ))}

        </SeatList>
        <hr />
        <Cart />
      </div>
    );
  }
}

export default App;
