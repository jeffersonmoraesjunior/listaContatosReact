import styled from 'styled-components'

export const Appstyled = styled.div`

    width: 100%;
    height: 100%;
    margin: 0;
    border: 0;

    .painel{
        width: 60%;
        border:  solid black;
        background-color: grey;
        margin: 0 auto;
        
        border-radius: 10px;
        box-shadow: 5px 5px 5px 5px rgba(0,0,0,0.75);
        margin-top: 100px;
        margin-bottom: 100px;       
        
        div{                        
            text-align: center;
            margin-top: 10px; 
            
            #inputs {
                display: flex;
                justify-content: right;                
            }

            #buttonInserir {
                display: flex;
                flex-direction: row;                
            }

            #whatsApp {
                width: 25px;
                height: 25px;                
            }

            #botao-criar, #botao-limpar {
                width: 60px;
                height: 50px;
                margin-right: 10px;
            }
            
            input{
                background-color: #FFFFFF;
                border-radius: 5px;
                height: 24px;
            }

            table{
                width: 100%;
                height: 100%;
                margin: 0 auto;
                border-top: 2px solid black;
            }  
        }
    }
    
    `
    