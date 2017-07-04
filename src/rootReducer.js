import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux'
import {counterReducer  as counter} from './components/Counter/Counter.reducer'

const rootReducer = combineReducers({
    counter,
    routing
})

export default rootReducer
