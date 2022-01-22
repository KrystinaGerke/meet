import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
        numberOfEvents: '32',
      }
    
    render() {
        return(
        <div className="NumberOfEvents">
            <input 
            type="number" 
            className="number"
            value={this.props.NumberOfEvents} />
            onChange={this.handleInputChanged}
        </div>

        )
    }};


export default NumberOfEvents;