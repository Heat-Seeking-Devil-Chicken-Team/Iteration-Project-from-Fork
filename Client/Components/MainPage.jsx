import React, {useState} from 'react';
import { AiFillFrown } from 'react-icons/ai';

export default function MainPage(props) {


return (
    <div className='mainContainer'>
        <div className='navBar'></div>
        <header className="toolBar">
            <nav>
                <ul>
                    <li><a href ="/home">Home?</a></li>
                    <li><a href ="">Home?</a></li>
                    <li><a href ="">Home?</a></li>
                    <li><a href ="">Home?</a></li>
                    <li><a href ="">Home?</a></li>
                    <li><button><AiFillFrown /></button></li>
                </ul>
            </nav>
            </header>
        <main className = 'buttonContainer'> 
            <button id = 'searchBtn'>Search</button>
            <button id = 'updateBtn'>Update Quantity</button>
        </main>
        <main className = 'contentContainer'> Main Content goes in here</main>
    </div>
    
)
}