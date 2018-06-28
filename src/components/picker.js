import React, { Component } from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

class Picker extends Component {
  render() {
    return {
      <div className="picker">
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </div>
    }

  }
}

export default Picker;
