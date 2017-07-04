import React from 'react'
import {Route} from 'react-router'
import App from './containers/App'
import Counter from './components/Counter/Counter'

export default
<Route path="/"
       component={App}>

    <Route path={"counter"}
           component={Counter} />
</Route>
