import API from '../../service'

import {
  GET_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  REMOVE_TODO,
  CLOSE_MODAL,
  OPEN_MODAL
} from './types'

export function getTodos() {
  return dispatch => {
    API.get(`gerutodo`)
      .then(res => {
        dispatch({
          type: GET_TODOS,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function addTodo(data) {
  return dispatch => {
    API.post(`gerutodo`, data)
      .then(res => {
        dispatch({
          type: ADD_TODO,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function updateTodo(data) {
  return dispatch => {
    API.put(`gerutodo/${data.id}`, data)
      .then(res => {
        dispatch({
          type: UPDATE_TODO,
          payload: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function removeTodo(todo) {
  return dispatch => {
    API.delete(`gerutodo/${todo}`)
      .then(() => {
        dispatch({
          type: REMOVE_TODO,
          payload: todo
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export function openModal(type, currentTodo = {}) {
  return dispatch => {
    dispatch({
      type: OPEN_MODAL,
      payload: { opened: true, type, currentTodo }
    })
  }
}

export function closeModal() {
  return dispatch => {
    dispatch({
      type: CLOSE_MODAL,
      payload: false
    })
  }
}
