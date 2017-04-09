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
                    <div className="loading">
                        <i className="material-icons">&#xE86A;</i>
                    </div>
                }

                {isUpdating &&
                    <div>updating...</div>
                }

                {isError &&
                    <div className="error">
                        <i className="material-icons">&#xE87F;</i>
                    </div>
                }

                {!isFetching && !isError && counters.map((counter, index)=>{
                    return <Counter 
                                {...counter}
                                isUpdating={isUpdating}
                                key={counter._id} 
                                handleUpdateCounter={handleUpdateCounter}
                             />
                })}
            </div>
        )
    }
}

export default Counters