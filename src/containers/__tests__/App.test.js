import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { App } from '../../App'

const props = {
  todos: [],
  getTodos: jest.fn(),
  isModalOpen: false
}

describe('<App />', () => {
  it('renders without crashing given props', () => {
    const wrapper = shallow(<App {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders with modal and todocards', () => {
    props.isModalOpen = true
    props.todos = ['Title', 'Description']
    const wrapper = shallow(<App {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
