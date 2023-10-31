import React from 'react';
import { HeaderStyle } from './style';

export default function Headers(){
    return(
        <HeaderStyle>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
        </HeaderStyle>
    );
}