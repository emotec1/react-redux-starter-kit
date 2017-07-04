import {createStore, applyMiddleware, compose} from 'redux'
import {createLogger} from 'redux-logger'
import rootReducer from './rootReducer'
import DevTools from './containers/DevTools'

const configureStore = preloadedState => {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(createLogger()),
            DevTools.instrument()
        )
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./', () => {
            const nextRootReducer = require('./').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

export default configureStore
