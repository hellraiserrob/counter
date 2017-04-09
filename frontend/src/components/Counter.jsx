import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class Counter extends Component {

    shouldComponentUpdate(nextProps){
        
        if(nextProps.value === this.props.value){
            return false
        }

        return true
    }

    componentWillUpdate(){
        // window.setTimeout(() => {
        ReactDOM.findDOMNode(this).classList.add('highlight');
        // }, 0)
    }
    
    componentDidUpdate(){
        
        window.setTimeout(() => {
            ReactDOM.findDOMNode(this).classList.remove('highlight');
        }, 500)

    }


    render(){
        
        // console.log(this.props)
        
        const {
            _id,
            name,
            value,
            handleUpdateCounter,
            isUpdating
        } = this.props

        return(

            <div className="counter">

                <div className="inner">
                
                    <div className="title">
                        {name}
                    </div>

                    <button className="add" disabled={isUpdating} onClick={() => handleUpdateCounter(_id, value + 1)}>+</button>

                    <div className="value">
                        
                        <strong>{value}</strong>
                    </div>

                    <button className="subtract" disabled={isUpdating} onClick={() => handleUpdateCounter(_id, value - 1)}>-</button>

                </div>

                
            </div>
        )
    }
}

export default Counter