import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import format from 'date-fns/format'

import * as TodoActions from '../../redux/actions/todo'

import {
  StyledContainer,
  CardContainer,
  ContainerTitle,
  CardTitle,
  ContainerActionButtons,
  ActionButton,
  CardDescription,
  InformationContainer,
  CardStatus,
  TagContainer,
  CardTag,
  StyledFilterContainer,
  StyledForm
} from './styled'

class TodoCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      done: 'All',
      myTodos: []
    }
  }

  handleStatusChange(e) {
    this.setState({
      done: e.target.value
    })
  }

  render() {
    const { todos, openModal, removeTodo } = this.props
    const { done } = this.state

    const todoAux =
      done === 'All' ? [...todos] : todos.filter(todo => todo.done === done)

    return (
      <Fragment>
        <StyledFilterContainer>
          <StyledForm>
            <select onChange={this.handleStatusChange.bind(this)} value={done}>
              <option value='All'>All</option>
              <option value='false'>Pending</option>
              <option value='true'>Done</option>
            </select>
          </StyledForm>
        </StyledFilterContainer>
        <StyledContainer>
          {todoAux.map(todo => (
            <CardContainer key={todo.id}>
              <ContainerTitle>
                <CardTitle>{todo.title}</CardTitle>
                <ContainerActionButtons>
                  <ActionButton onClick={() => openModal('put', todo)}>
                    Edit
                  </ActionButton>
                  <ActionButton
                    bgColor='#cc0000'
                    onClick={() => removeTodo(todo.id)}
                  >
                    Remove
                  </ActionButton>
                </ContainerActionButtons>
              </ContainerTitle>
              <CardDescription>{todo.description}</CardDescription>
              <InformationContainer>
                <div>
                  <div>
                    <strong>Status: </strong>
                    {todo.done === 'true' ? (
                      <CardStatus fontColor={'green'}>Done!</CardStatus>
                    ) : (
                      <CardStatus>Pending.</CardStatus>
                    )}
                  </div>
                  <div>
                    <strong>Created:</strong>{' '}
                    {format(new Date(todo.createDate), 'dd/MM/yy HH:mm')}
                  </div>
                </div>
                <div>
                  <div>
                    <strong>Est.:</strong> {todo.estTime} day(s).
                  </div>
                  <div>
                    <strong>Due:</strong>{' '}
                    {format(new Date(todo.dueDate), 'dd/MM/yy HH:mm')}
                  </div>
                </div>
              </InformationContainer>
              <TagContainer>
                {todo.tags.map((tag, i) => (
                  <CardTag key={i}>#{tag.toLowerCase()}</CardTag>
                ))}
              </TagContainer>
            </CardContainer>
          ))}
        </StyledContainer>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  todos: state.todo.todos,
  modalType: state.todo.modalType
})

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoCards)

TodoCards.propTypes = {
  todos: PropTypes.array.isRequired,
  modalType: PropTypes.string
}

export { TodoCards }
