import React, { Component } from 'react';

class Counter extends Component {

    render(){
        
        console.log(this.props)
        
        const {
            _id,
            name,
            value,
            handleUpdateCounter,
            isUpdating
        } = this.props

        return(

            <div>
                <p>
                    {name}
                </p>
                <h1>
                    {value}
                </h1>

                <button disabled={isUpdating} onClick={() => handleUpdateCounter(_id, value - 1)}>-</button>
                <button disabled={isUpdating} onClick={() => handleUpdateCounter(_id, value + 1)}>+</button>
            </div>
        )
    }
}

export default Counter