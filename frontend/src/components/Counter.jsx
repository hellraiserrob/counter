import React, { Component } from 'react';

class Counter extends Component {

    render(){
        
        console.log(this.props)
        
        return(

            <div>
                <p>
                    {this.props.title}
                </p>
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