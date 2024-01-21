import styled from "styled-components";

export const Container = styled.div`
background-color: #0A0A10;
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;

height: 100%;
min-height: 100vh;
`

export const Image = styled.img`
margin-top: 30px;

`

export const Order = styled.li`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;

margin-top: 20px;

border-radius: 14px;
background: rgba(255, 255, 255, 0.25);
width: 342px;
height: 101px;


div{
    display: flex;
    flex-direction: column;
    width: 230px;
    height: 100%;
    justify-content: space-between;
    padding: 17px 0;
    gap: 8px;
    
}

button{
    background: none;
    border: none;
    cursor: pointer;
}

`
