import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Header from "../components/Header/Header";

class App extends Component {
    static propTypes = {
        errorMessage: PropTypes.string,
    }

    render() {
        return (
            <div>
                <Header />
                APP Container
                <hr />
                {this.props.children}
            </div>
        )
    }
}

export default connect()(App)
