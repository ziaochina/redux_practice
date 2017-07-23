import { combineReducers } from 'redux'

//加法
import addition from './addition'

//减法
import subtraction from './subtraction'

export default combineReducers({
    addition,
    subtraction,
})
