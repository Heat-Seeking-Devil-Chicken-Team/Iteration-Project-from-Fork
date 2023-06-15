import React, {useState} from 'react';
import { AiFillFrown } from 'react-icons/ai';

export default function MainPage(props) {
    const [results, setResults] = useState([]);
    // const [value, setValue] = useState('');

    const handleChange = (event) => {
        console.log('search item has been entered')
        event.preventDefault();
        const request = {itemName: 'bike', quantity: '3'}
        // setValue(event.target.value);
        // console.log(event.target.value);

        fetch('/db/quote', {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
              'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(data => {
            setResults(data);
            console.log(data);
        }).catch((err) => console.log)
    }


   

    // const resultItems = [];
    // for (let i = 0; i < results.length; i++) {
    //     resultItems.push()
    // }

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
            <button id = 'searchBtn' onClick={handleChange}>Search</button>
            <button id = 'updateBtn'>Update Quantity</button>
        </main>
        <main className = 'contentContainer'> Main Content goes in here</main>
    </div>
    
)
}



// async function search () {
//     try {
//     // ${quote} template literal will send the actual quote/query info to the api. Removes the need for a POST request 
//      // const response = await fetch(`/db/${value}`);
//         const response = await fetch(`/db`);
//         const data = await response.json();
//         console.log(data);
//         setResults(data);
//     } catch (err) {
//         console.log('Error, query not syncing');
//     }
// }
// useEffect(() => {
//     search();
// }, [request]);

