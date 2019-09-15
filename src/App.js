import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as TodoActions from './redux/actions/todo'

import Header from './components/Header'
import Modal from './components/Modal'
import EmptyCards from './components/EmptyCards'
import TodoCards from './components/TodoCards'

class App extends Component {
  async componentDidMount() {
    this.props.getTodos()
  }

  render() {
    const { todos, isModalOpen } = this.props

    return (
      <Fragment>
        <Header />
        {isModalOpen && <Modal />}
        {todos.length === 0 ? <EmptyCards /> : <TodoCards />}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todo.todos,
  isModalOpen: state.todo.isModalOpen
})

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

App.propTypes = {
  getTodos: PropTypes.func,
  todos: PropTypes.array.isRequired,
  isModalOpen: PropTypes.bool.isRequired
}

export { App }
