import { createStore, applyMiddleware } from 'redux';

// import { connect } from './actions/counterActions.js'

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client'

let socket = io.connect({reconnection: true})

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

socket.on('connect', () => {
  console.log('connect fired!')
  // store.dispatch(connect)
})

socket.on('disconnect', () => {
  console.log('disconnect fired!')
})

socket.on('reconnect', () => {
  console.log('reconnect fired!')
})


export default store