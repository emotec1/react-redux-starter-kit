import {INCREMENT, DECREMENT, ADD} from './Counter.action.types'

const initialValue = {
    counterValue: 0
}
export function counterReducer(state = initialValue, action) {
    switch (action.type) {
        case INCREMENT:
            return {counterValue: state.counterValue + 1}


        case DECREMENT:
            return {counterValue: state.counterValue - 1}

        case ADD:
            return {counterValue: state.counterValue + action.value}

        default:
            return state
    }
}