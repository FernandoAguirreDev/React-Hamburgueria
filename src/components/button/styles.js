import styled from "styled-components";

export const Button = styled.button`
width: 342px;
height: 68px;
padding: 0px 113px;
justify-content: center;
align-items: center;
border: none;

background: ${props => props.isRed ?'#D93856':' rgba(255, 255, 255, 0.25)' };

color: #FFF;
text-align: center;
font-size: 17px;
font-style: normal;
font-weight: 900;
line-height: 2.5px;

cursor: pointer;

&:hover{
    opacity: 0.6;
}
&:active{
    opacity: 0.4;
}
`