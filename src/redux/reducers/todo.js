import {
  GET_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  CLOSE_MODAL,
  OPEN_MODAL
} from '../actions/types'

const INITIAL_STATE = {
  todos: [],
  isModalOpen: false,
  modalType: '',
  currentTodo: {}
}

export default function todo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload
      }

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        isModalOpen: false
      }

    case UPDATE_TODO:
      const filteredTodos = state.todos.filter(
        todo => todo.id !== action.payload.id
      )
      return {
        ...state,
        todos: [...filteredTodos, action.payload],
        isModalOpen: false
      }

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload
        })
      }

    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: action.payload
      }

    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: action.payload.opened,
        modalType: action.payload.type,
        currentTodo: action.payload.currentTodo
      }

    default:
      return state
  }
}
