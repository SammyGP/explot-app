import styled from 'styled-components'

const Button = styled.button<any>`
  min-width: 1rem;
  appearance: none;
  background-color: ${(props) =>
    props.primary ? '#1bb978' : props.secondary ? '#1aaaff' : 'inherit'};
  border-radius: 0.25rem;
  border: ${(props) =>
    props.primary || props.secondary ? 'none' : '2px solid black'};
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  color: ${(props) => (props.primary || props.secondary ? '#fff' : '#000000')};
  justify-content: center;
  align-items: center;
  line-height: 1.5rem;
  font-size: 1rem;
  margin: 0 1em 0 1em;
  outline: none;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    color: #000000;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

export default Button
