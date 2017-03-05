import { combineReducers } from "redux"

import counterReducer from "./counterReducer"

let reducer = combineReducers({counterReducer})

export default reducer