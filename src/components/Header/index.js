import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as TodoActions from '../../redux/actions/todo'

import { StyledContainer, Title, CreateButton } from './styled'

class Header extends Component {
  render() {
    const { openModal } = this.props
    return (
      <StyledContainer>
        <Title>Geru Challenge</Title>
        <CreateButton onClick={() => openModal('post')}>Create</CreateButton>
      </StyledContainer>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Header)

Header.propTypes = {
  openModal: PropTypes.func
}

export { Header }
