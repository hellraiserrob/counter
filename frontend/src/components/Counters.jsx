import React, { Component } from 'react';
import Counter from './Counter'

class Counters extends Component {

    render(){

        const { counters, handleINC, handleDEC  } = this.props
        
        return(


            <div>
                {counters.map((counter, index)=>{
                    return <Counter key={index} {...counter} handleINC={handleINC} handleDEC={handleDEC} />
                })}
            </div>
        )
    }
}

export default Counters