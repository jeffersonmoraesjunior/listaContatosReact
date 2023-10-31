import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *, body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const Teste = styled.div`
    display: flex;    
    flex-direction: column;
    margin: 0 auto;
    color: red;    
`