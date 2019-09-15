import styled from 'styled-components'

export const StyledFilterContainer = styled.div`
  margin-top: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const StyledForm = styled.form`
  width: 95%;

  border: 1px solid #ccc;
  border-radius: 3px 3px 0px 0px;
  overflow: hidden;
  background: #fafafa;

  select {
    padding: 10px 13px;
    width: 100%;
    border: none;
    box-shadow: none;
    background: transparent;
    background-image: none;
    -webkit-appearance: none;

    text-align-last: center;
  }

  select:focus {
    outline: none;
  }
`

export const StyledContainer = styled.div`
  margin-top: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const CardContainer = styled.div`
  width: 95%;
  margin-bottom: 2vh;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  cursor: pointer;

  :hover {
    transform: scale(1.01);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
  }
`
export const ContainerTitle = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: #03adfc;
  padding: 5px 0px 5px 20px;

  display: flex;
  justify-content: space-between;
`

export const CardTitle = styled.h3`
  color: white;
  font-size: 20px;
  font-weight: 600;
  padding-top: 4px;
`

export const ContainerActionButtons = styled.div`
  padding: 5px 20px 5px 0px;
`

export const ActionButton = styled.button`
  border: 0;
  border-radius: 5px;
  width: 45px;
  height: 30px;
  background: ${props => (props.bgColor ? props.bgColor : '#4776e6')};
  cursor: pointer;
  font-size: 0.69rem;
  color: #fff;
  margin-left: 10px;
`

export const CardDescription = styled.p`
  padding: 14px 80px 18px 30px;
  color: grey;
  font-size: 0.94rem;
`

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  align-items: center;
  font-size: 13px;

  padding: 10px 30px 10px 30px;
  color: #3d3d3d;
  background-color: rgba(3, 173, 252, 0.2);
`

export const CardStatus = styled.span`
  font-weight: bold;
  color: ${props => (props.fontColor ? props.fontColor : '#cc0000')};
`

export const TagContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`

export const CardTag = styled.span`
  border-radius: 30px;
  margin-right: 10px;
  color: ${props => (props.fontColor ? props.fontColor : '#03adfc')};
  font-size: 10px;
  font-style: italic;
`

export const CardNoTag = styled.span`
  border-radius: 30px;
  margin-right: 10px;
  color: #cc0000;
  font-size: 10px;
  font-style: italic;
`
