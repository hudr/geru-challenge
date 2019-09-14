import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { TodoCards } from '../../components/TodoCards'

describe('<TodoCards />', () => {
  it('renders without crashing given props', () => {
    const props = {
      todos: [],
      removeTodo: jest.fn(),
      getTodos: jest.fn(),
      openModal: jest.fn(),
      isModalOpen: false
    }
    const wrapper = shallow(<TodoCards {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
