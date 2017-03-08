
import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { fetchQuestions } from '../actions/questionActions'
import { INC, DEC } from '../actions/counterActions.js'

import Counters from '../components/Counters'

class CounterContainer extends Component  {

    render(){  

        return (
            <div>
                <Counters {...this.props} />
            </div>
        )
    }

}

function mapStateToProps(state) {

    const counters = state.counterReducer

	return {
		counters
	}
}

function mapDispatchToProps(dispatch) {
	return {
		handleINC() {
			dispatch(INC())
		},
		handleDEC() {
			dispatch(DEC())
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer)