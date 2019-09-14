import reducer from '../../redux/reducers/todo'
import * as types from '../../redux/actions/types'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      todos: [],
      isModalOpen: false,
      modalType: '',
      currentTodo: {}
    })
  })
})

describe('Covering Actions', () => {
  const expectedState = {
    todos: [],
    modalType: '',
    currentTodo: {},
    isModalOpen: false
  }

  test('ADD_TODO', () => {
    const action = {
      type: types.ADD_TODO,
      payload: {
        id: '2',
        createDate: '2019-09-14T03:45:16.709Z',
        title: 'Badwork',
        description: 'Description',
        dueDate: '2019-09-14T03:45:16.709Z',
        estTime: '2',
        tags: ['grow', 'up'],
        done: 'false'
      }
    }
    const changedState = {
      ...expectedState,
      todos: [...expectedState.todos, action.payload],
      isModalOpen: false
    }

    expect(reducer(undefined, action)).toEqual(changedState)
    expect(reducer(undefined, action)).toMatchSnapshot(changedState)
  })

  test('UPDATE_TODO', () => {
    const action = {
      type: types.UPDATE_TODO,
      payload: {
        id: '1',
        createDate: '2019-09-14T03:45:16.709Z',
        title: 'Badwork',
        description: 'Description',
        dueDate: '2019-09-14T03:45:16.709Z',
        estTime: '2',
        tags: ['grow', 'up'],
        done: 'false'
      }
    }
    const changedState = {
      ...expectedState,
      todos: [...expectedState.todos, action.payload],
      isModalOpen: false
    }

    expect(reducer(undefined, action)).toMatchSnapshot(changedState)
  })

  test('GET_TODOS', () => {
    const action = {
      type: types.GET_TODOS,
      payload: {
        id: '1',
        createDate: '2019-09-14T03:45:16.709Z',
        title: 'Homework',
        description: 'Description',
        dueDate: '2019-09-14T03:45:16.709Z',
        estTime: '2',
        tags: ['grow', 'up'],
        done: 'false'
      }
    }
    const changedState = { ...expectedState, todos: action.payload }
    expect(reducer(undefined, action)).toEqual(changedState)
    expect(reducer(undefined, action)).toMatchSnapshot(changedState)
  })

  test('REMOVE_TODOS', () => {
    const action = {
      type: types.REMOVE_TODO,
      payload: 1
    }
    const changedState = {
      ...expectedState,
      todos: expectedState.todos.filter(todo => {
        return todo.id !== action.payload
      })
    }

    expect(reducer(undefined, action)).toEqual(changedState)
    expect(reducer(undefined, action)).toMatchSnapshot(changedState)
  })

  test('CLOSE_MODAL', () => {
    const action = { type: types.CLOSE_MODAL, payload: false }
    const changedState = { ...expectedState, isModalOpen: action.payload }
    expect(reducer(undefined, action)).toEqual(changedState)
    expect(reducer(undefined, action)).toMatchSnapshot(changedState)
  })

  test('OPEN_MODAL', () => {
    const action = {
      type: types.OPEN_MODAL,
      payload: { opened: true, type: '', currentTodo: {} }
    }
    const changedState = {
      ...expectedState,
      isModalOpen: action.payload.opened,
      modalType: action.payload.type,
      currentTodo: action.payload.currentTodo
    }
    expect(reducer(undefined, action)).toEqual(changedState)
    expect(reducer(undefined, action)).toMatchSnapshot(changedState)
  })
})
