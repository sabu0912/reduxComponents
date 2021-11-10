import { combineReducers } from 'redux'
import { SELECT_USER, SELECT_FOOTER } from '../../actions/user/select'

const selected = (stateDefault = {}, action) => {
  switch (action.type) {
    case SELECT_USER:
      return action.payload
    default:
      return stateDefault
  }
}

const selected1 = (stateDefault = {}, action) => {
  switch (action.type) {
    case '111':
      return action.payload
    default:
      return stateDefault
  }
}

const selected3 = (stateDefault = {year:'21'}, action) => {
  switch (action.type) {
    case SELECT_FOOTER:
      return {...stateDefault, year:action.payload}
    default:
      return stateDefault
  }
}

export default combineReducers({ selected, selected1, selected3 })
