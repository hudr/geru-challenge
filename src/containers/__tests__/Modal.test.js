import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Modal } from '../../components/Modal'

const props = {
  todos: [],
  isModalOpen: false,
  modalType: '',
  currentTodo: {},
  classes: {}
}

describe('<Modal />', () => {
  it('renders without crashing given props', () => {
    const wrapper = shallow(<Modal {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
