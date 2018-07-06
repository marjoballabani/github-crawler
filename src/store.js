import {createStore, applyMiddleware, combineReducers} from 'redux'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware';

import commits from './reducers/commitReducer'
import repos from './reducers/repoReducer'

const reducers = combineReducers({repos, commits})
const store = createStore(reducers, applyMiddleware(createLogger(), promiseMiddleware()))

export default store
