import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './NowPage.css'
import '../App.css'

import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css"


class NowPage extends Component {

  state = {
    selectedDay: undefined,
  };
  handleDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  };

  render () {
    return (
      <div className='NowPage'>
        <div className='left'>
          <h1>Calendar</h1>
          <div className="calendar">
            <DayPicker
        disabledDays={{ daysOfWeek: [0] }}
        selectedDays={this.state.selectedDay}
        onDayClick={this.handleDayClick}
      />
      </div>
        </div>
        <div className='right'>
          <h1>List of all on selected day</h1>
        </div>
      </div>
    )
  }
}

export default NowPage