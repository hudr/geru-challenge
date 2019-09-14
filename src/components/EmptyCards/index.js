import React, { Component, Fragment } from 'react'

import { StyledEmptyContainer, NotesImg, Subtitle } from './styled'

import emptyImage from '../../assets/images/nodata.svg'

class EmptyCards extends Component {
  render() {
    return (
      <Fragment>
        <StyledEmptyContainer>
          <NotesImg src={emptyImage} alt='emptyimage' />
          <Subtitle>Your todo list is empty :)</Subtitle>
        </StyledEmptyContainer>
      </Fragment>
    )
  }
}

export default EmptyCards
