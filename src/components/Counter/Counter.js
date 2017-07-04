import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as CounterActions from './Counter.actions'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {addToCounter: 0};

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addToCounter = this.addToCounter.bind(this);
    }

    static propTypes = {
        counterValue: PropTypes.number.isRequired,
        actions: PropTypes.object.isRequired
    }

    handleInputChange(event) {
        this.setState({addToCounter: event.target.value})
    }

    addToCounter() {
        this.props.actions.add(Number.parseFloat(this.state.addToCounter));
    }

    render() {
        const {counterValue, actions} = this.props

        return (
            <div>
                Counter: {counterValue}
                <div>
                    <button onClick={actions.increment}>+</button>
                    <button onClick={actions.decrement}>-</button>
                    <button>Reset counter</button>
                </div>

                Dodaj do countera:
                <input value={this.state.addToCounter}
                       type="number"
                       onChange={this.handleInputChange} />
                <button onClick={this.addToCounter}>DODAJ</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    counterValue: state.counter.counterValue
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(CounterActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)