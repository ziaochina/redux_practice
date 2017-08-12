import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Additon from './containers/addition'
import Subtraction from './containers/subtraction'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
const history = createHistory()
const middleware = routerMiddleware(history)
const store = createStore(
  combineReducers({
    reducer,
    router: routerReducer
  }),
  applyMiddleware(middleware)
)
window.store = store

render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<Route exact path="/" component={Additon} />
				<Route path="/additon" component={Additon} />
				<Route path="/subtraction" component={Subtraction} />
			</div>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('app')
)
