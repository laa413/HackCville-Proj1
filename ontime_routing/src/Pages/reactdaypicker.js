import React from 'react';
import DayPicker from "react-day-picker";

import "react-day-picker/lib/style.css"

class MyComponent extends React.Component {
  state = {
    selectedDay: undefined,
  };
  handleDayClick = (day, { selected }) => {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  };
  render() {
    return (
      <DayPicker
        disabledDays={{ daysOfWeek: [0] }}
        selectedDays={this.state.selectedDay}
        onDayClick={this.handleDayClick}
      />
    );
  }
}