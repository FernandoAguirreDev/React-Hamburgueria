import styled from "styled-components";

export const P = styled.p`
    color: #FFF;
    font-size: 18px;
    font-style: normal;
    font-weight: ${props => props.isName ? '700' : '300'};
    line-height: normal;

`