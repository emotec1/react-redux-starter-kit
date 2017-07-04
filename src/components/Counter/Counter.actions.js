import * as actionTypes from './Counter.action.types'

export const increment = () => ({type: actionTypes.INCREMENT})
export const decrement = () => ({type: actionTypes.DECREMENT})
export const add = (value) => ({type: actionTypes.ADD, value: value})