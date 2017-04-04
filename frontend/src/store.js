import { createStore, applyMiddleware } from 'redux';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client'

let socket = io.connect()
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

import thunkMiddleware from 'redux-thunk'

import reducer from './reducers/index'





function configureStore(preloadedState) {
  return createStore(
    reducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      socketIoMiddleware
    )
  )
}

const store = configureStore()

export default store