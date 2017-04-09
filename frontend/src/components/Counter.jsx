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

        const style = {
            color: value <= 0 ? '#ddd' : ''
        }

        return(

            <div className="counter">

            
                <div className="title">
                    {name}
                </div>

                <button className="add" disabled={isUpdating} onClick={() => handleUpdateCounter(_id, value + 1)}>
                    {/*<i className="material-icons">&#xE8DC;</i>*/}
                    <i className="material-icons">&#xE5D8;</i>
                    {/*<i className="material-icons">&#xE148;</i>*/}
                </button>


                <div className="value">
                    
                    <strong style={style}>{value}</strong>
                </div>

                <button className="subtract" disabled={isUpdating} onClick={() => handleUpdateCounter(_id, value - 1)}>
                    <i className="material-icons">&#xE5DB;</i>
                </button>


            

                
            </div>
        )
    }
}

export default Counter