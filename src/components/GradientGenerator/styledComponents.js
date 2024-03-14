import styled from 'styled-components'

export const MainConatiner = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-image:linear-gradient(to top,#8ae323,#014f7b);
height:100vh;

`
export const GradientContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const MainHeading = styled.h1`
color:#ededed;
font-family:Roboto;
font-size:30px;
`
export const DirectionPara = styled.p`
color: #ffffff79;
font-family:Roboto;
font-size:17px;
`
export const DirectionList = styled.ul`
padding-left:0px; 
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;

`
export const ColorContainer = styled.div`
display:flex; 
justify-content:space-between;
width:220px;

`
export const GreenContainer = styled.div`
padding:10px;
`
export const BlueContainer = styled.div`
padding:10px;
`
export const FirstColorInput = styled.input`
background-color: #8ae323;
border-width:0px;
width:100%;
outline:none;
`

export const SecondColorInput = styled.input`
background-color:#014f7b;
border-width:0px;
width:100%;
outline:none;
`
export const GenerateButton = styled.button`
background-color:#00c9b7;
padding:10px 7px 10px 7px;
border-width:0px;
border-radius:5px;
margin-top:10px;
outline:none;
`
