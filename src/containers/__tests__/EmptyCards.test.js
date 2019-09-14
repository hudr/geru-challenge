import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import EmptyCards from '../../components/EmptyCards'

describe('<EmptyCards />', () => {
  it('renders the component', () => {
    const wrapper = shallow(<EmptyCards />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
