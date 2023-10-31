import styled from "styled-components";

export const HeaderStyle = styled.header`

background-color: grey;
height: 100%;
border-bottom:3px solid black;
border-left: 3px solid black;
border-right: 3px solid black;
border-bottom-right-radius:10px ;
border-bottom-left-radius: 10px ;


nav{
    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 20px;
        
        li{
                
                font-size: 20px;
                font-weight: bold; 
                text-decoration: none;
                a{
                    color: black;
                }

            }
        }
    }
`
