
import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { fetchQuestions } from '../actions/questionActions'
import { updateCounter, fetchCounters } from '../actions/counterActions.js'

import Counters from '../components/Counters'

class CounterContainer extends Component  {

    render(){  

        return (
			<div>
				<h1>Counters</h1>
                <h2>A small project</h2>

				<hr/>
				
				<Counters {...this.props} />
			</div>
        )
    }

}

function mapStateToProps(state) {

    const { counters, isFetching, isError } = state.counterReducer

	return {
		counters,
		isFetching,
		isError
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleUpdateCounter(_id, value) {
			dispatch(updateCounter(_id, value))
		},
		handleFetchCounters() {
			dispatch(fetchCounters())
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)