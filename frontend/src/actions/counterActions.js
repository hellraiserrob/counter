/**
 * actions
 */


/**
 * request for counters
 */

export function requestCounters() {

    return {
        type: 'REQUEST_COUNTERS'
    }
}

export function receiveCounters(response) {
    return {
        type: 'RECEIVE_COUNTERS',
        payload: response
    }
}

export function receiveCountersError(response) {
    return {
        type: 'RECEIVE_COUNTERS_ERROR',
        payload: response
    }
}

export function fetchCounters() {

    return dispatch => {
        dispatch(requestCounters())
        return fetch(`/api/getAll`)
            .then(response => response.json())
            // .then(response => {
            //     console.log(response)
            // })
            .then(response => dispatch(receiveCounters(response)))
            .catch(response => dispatch(receiveCountersError(response)))
    }
}



/**
 * request for counters
 */

export function requestCounterUpdate() {

    return {
        type: 'REQUEST_COUNTER_UPDATE'
    }
}

export function receiveCounterUpdate(response) {
    return {
        type: 'RECEIVE_COUNTER_UPDATE',
        payload: response
    }
}

export function receiveCounterUpdateError(response) {
    return {
        type: 'RECEIVE_COUNTER_UDATE_ERROR',
        payload: response
    }
}

export function updateCounter(_id, value) {


    var body = JSON.stringify({_id,value})

    return dispatch => {
        dispatch(requestCounterUpdate())
        return fetch(`/api/update`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: body
        })
        .then(response => response.json())
        .then(response => dispatch(receiveCounterUpdate(response)))
        .catch(response => dispatch(receiveCounterUpdateError(response)))
    }
}