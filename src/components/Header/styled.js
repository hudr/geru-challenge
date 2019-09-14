import styled from 'styled-components'

export const StyledContainer = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #03adfc;
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  margin-left: 4vh;
  color: white;
  font-size: 4vh;
  font-weight: 600;
`

const CreateButton = styled.button`
  border: 0;
  border-radius: 5px;
  width: 80px;
  height: 30px;
  background: #29a329;
  cursor: pointer;

  margin-right: 4vh;

  font-size: 0.69rem;
  color: #fff;
`

CreateButton.displayName = 'CreateButton'

export { CreateButton }
