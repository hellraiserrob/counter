import React, { Component } from 'react';

class Counter extends Component {

    render(){
        return(
            <div>
                <h1>
                    {this.props.value}
                </h1>

                <button onClick={this.props.handleDEC}>-</button>
                <button onClick={this.props.handleINC}>+</button>
            </div>
        )
    }
}

export default Counter