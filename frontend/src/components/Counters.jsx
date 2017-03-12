import React, { Component } from 'react';
import Counter from './Counter'

class Counters extends Component {

    componentDidMount(){
        this.props.handleFetchCounters();
    }

    render(){

        const { counters, isFetching, isUpdating, isError, handleUpdateCounter} = this.props
        
        return(


            <div>

                {isFetching &&
                    <div>fetching...</div>
                }

                {isUpdating &&
                    <div>updating...</div>
                }

                {isError &&
                    <div>there was an error...</div>
                }

                {counters.map((counter, index)=>{
                    return <Counter key={index} {...counter} handleUpdateCounter={handleUpdateCounter} />
                })}
            </div>
        )
    }
}

export default Counters