import styled, { css } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 6px;
  border: 2px solid #D79922;
  color: #D79922;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  :hover {
    color: #f63b3b;
    border: 2px solid #f63b3b;
  }

  ${props =>
    props.primary &&
    css`
      background: #D79922;
      color: white;

      :hover {
        color: #fff;
        background: #f63b3b;
      }
    `};
`

export default Button