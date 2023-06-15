import React, {useState} from 'react';
import { AiFillFrown } from 'react-icons/ai';
import Modal from './modal.jsx';

export default function MainPage(props) {
const [searchOpen, setSearchOpen] = useState(false);
const [searchResult, changeSearchResult] = useState({});
const [itemName, changeSearchItem] = useState('');
//stretch feature to add a table that dynamically changes
const [table, setTable] = useState([]);

function toggleModal() {
    setSearchOpen(true);
};

return (
    <>
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
            <button onClick={ toggleModal } id = 'searchBtn' >Search</button>
            {searchOpen && <Modal searchResult={searchResult} changeSearchResult={changeSearchResult} searchOpen={searchOpen} setSearchOpen={setSearchOpen}
            itemName = {itemName} changeSearchItem = {changeSearchItem}/>}
            <button id = 'updateBtn'>Update Quantity</button>
        </main>
        <main className = 'contentContainer'> 
            {!searchOpen && (<h1 id='resultTable'>{itemName}</h1>)}
                <table className='table'>
                    <tr id='tableRow1'>
                        <th className='hRC1'>Cost</th>
                        <th className='hRC2'>Shipping Time</th>
                        <th className='hRC3'>Price</th>
                    </tr>
                    <tr id='tableRow2'>
                        <th className='rRC1'>${searchResult.cost}</th>
                        <th className='rRC2'>{searchResult.shipTime}</th>
                        <th className='rRC3'>${searchResult.price}</th>
                    </tr>
                </table>
        </main>
    </div>
    </>
    
)
}


/* 
<table>
    <tr>
        <th class='headerRow'>Cost</th>
        <th class='headerRow'>Shipping Time</th>
        <th class='headerRow'><Price</th>
    </tr>
    <tr>
        <th class='resultRow'>{searchResult.cost}</th>
        <th class='resultRow'>{searchResult.shipTime}</th>
        <th class='resultRow'>{searchResult.price}</th>
    </tr>
</table>

*/