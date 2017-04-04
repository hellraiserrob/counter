
const initialState = {
    isFetching: false,
    isError: false,
    isUpdating: false,
    counters: []
}

function counterReducer(state = initialState, action) {

    switch (action.type) {

        case 'UPDATE': {
            //console.log('update', action);
            const update = action.payload

            return Object.assign({}, state, {
                isFetching: false,
                counters: state.counters.map((item, index) => {
                    
                    if(update._id !== item._id){
                        return item
                    }

                    return {
                        ...item, ...update
                    }

                })
            })
        }

        case 'REQUEST_COUNTERS': {
            return Object.assign({}, state, {
                isFetching: true
            })
        }

        case 'RECEIVE_COUNTERS': {
            return Object.assign({}, state, {
                isFetching: false,
                counters: action.payload
            })
        }

        case 'RECEIVE_COUNTERS_ERROR': {
            return Object.assign({}, state, {
                isFetching: false,
                isError: true,
                counters: []
            })
        }

        case 'REQUEST_COUNTER_UPDATE': {
            return Object.assign({}, state, {
                isUpdating: true
            })
        }

        case 'RECEIVE_COUNTER_UPDATE': {

            const update = action.payload

            return Object.assign({}, state, {
                isFetching: false,
                counters: state.counters.map((item, index) => {
                    
                    if(update._id !== item._id){
                        return item
                    }

                    return {
                        ...item, ...update
                    }

                })
            })
        }

        
        case 'RECEIVE_COUNTER_UDATE_ERROR': {
            return Object.assign({}, state, {
                isFetching: false,
                isError: true
            })
        }

        default: {
            return state;
        }
    }



}

export default counterReducer;