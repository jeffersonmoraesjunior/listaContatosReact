import {createGlobalStyle} from "styled-components";
import img from '../assets/images/fotos/imgBranca.jpg'


export default createGlobalStyle`
    body{
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        margin-bottom: 0; 
        /* background-color: black; */
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(${img});
    }

`

    



