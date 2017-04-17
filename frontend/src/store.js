import { createStore, applyMiddleware } from 'redux';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client'

let socket = io.connect({reconnection: true})

socket.on('connect', () => {
  console.log('connect fired!')
})

socket.on('disconnect', () => {
  console.log('disconnect fired!')
})

socket.on('reconnect', () => {
  console.log('reconnect fired!')
})

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