
const initialState = [{
    title: 'Counter 1',
    value: 10
},{
    title: 'Counter 2',
    value: 150
}]

function counterReducer(state = initialState, action){

    switch(action.type){

        
        case "INC": {
            return {...state, value: state.value += 1}
        }
        
        case "DEC": {
            return {...state, value: state.value -= 1}
        }

        default: {
            return state;
        }
    }

    

}

export default counterReducer;