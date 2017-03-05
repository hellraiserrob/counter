
import React, { Component } from 'react'
import { connect } from 'react-redux'

// import { fetchQuestions } from '../actions/questionActions'
import { INC, DEC } from '../actions/counterActions.js'

import Counter from '../Counter'

class CounterContainer extends Component  {

    render(){  

        return (
            <div>
                <Counter {...this.props} />
            </div>
        )
    }

}

function mapStateToProps(state) {

    const { value } = state.counterReducer

	return {
		value
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