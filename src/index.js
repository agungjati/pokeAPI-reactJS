import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import  myReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const middleware = [ thunk ]

const store = createStore(myReducer, applyMiddleware(...middleware))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
