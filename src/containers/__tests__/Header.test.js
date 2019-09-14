import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Header } from '../../components/Header'

describe('<Header />', () => {
  const props = {
    openModal: jest.fn(),
    addTodo: jest.fn(),
    closeModal: jest.fn(),
    getTodos: jest.fn(),
    removeTodo: jest.fn(),
    updateTodo: jest.fn()
  }

  it('renders without crashing given props', () => {
    const wrapper = shallow(<Header {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
