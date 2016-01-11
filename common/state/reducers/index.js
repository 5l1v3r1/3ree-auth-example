import { combineReducers } from 'redux'
import { routeReducer as routing } from 'redux-simple-router'

import dashboards from './dashboards'
import lists from './lists'
import resources from './resources'
import inputTypes from './inputTypes'

export default combineReducers({
  dashboards,
  lists,
  resources,
  inputTypes,
  routing
})