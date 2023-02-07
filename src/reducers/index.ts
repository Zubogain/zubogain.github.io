import { combineReducers } from 'redux'
import contact from '@Reducers/contact'
import theme from '@Reducers/theme'

const reducer = combineReducers({
  theme,
  contact,
})

export default reducer
