// Style your elements here
import styled from 'styled-components'

export const List = styled.li`
list-style-type:none;
margin:5px;
width:70px;
display:flex;
flex-direction:column;

`
export const DirectionButton = styled.button`
width:100%;
padding:7px 20px 7px 20px;
border-radius:5px;
border-width:0px;
font-family:Roboto;
color: #1e293b;
font-weight:bold;
font-size:14px;
display:flex;
align-items:center;
justify-content:center;
opacity:${props => (props.activeClass ? 1 : 0.5)};
`
