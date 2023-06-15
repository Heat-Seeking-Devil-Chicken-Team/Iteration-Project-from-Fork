import React, { useState } from 'react';



export default function Modal(props){
    
    const [quantity, changeSearchQty] = useState();
    const {searchResult, changeSearchResult, searchOpen, setSearchOpen, itemName, changeSearchItem} = props;
    

    const inputItemChange = (e) => {
        changeSearchItem(e.target.value);
    }
    const inputQtyChange = (e) => {
        changeSearchQty(Number(e.target.value));
    }
    const getResult = (e) => {
        console.log(itemName, quantity);
        setSearchOpen(false)
        e.preventDefault();
        fetch('/db/quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                itemName: itemName,
                quantity: quantity,    
            }),
        })
        .then((data) => data.json())
        .then((data) => {
            console.log(data)
            changeSearchResult(data);
            // return setSearchOpen(false);
            // changeSearchItem('');
            // changeSearchQty(0);
        })
        .catch(err => console.log({err: 'Error posting the quantity'}))
    }

    const closeModal = () => {
        setSearchOpen(false);
    }
    return(
    <div className='modal'>
        <div className='overlay'> 
           <div className='modal-content'>
                <h1>Search Form</h1>
                <form className="searchForm" onSubmit={getResult}>
                    <input id="itemName" placeholder='Item Name'
                    type="text"
                    value={itemName}
                    onChange={inputItemChange}
                    ></input>
                    <input id='qtyName' placeholder='Quantity'
                    type ='number'
                    value={quantity} 
                    onChange={inputQtyChange}
                    ></input>
                    <button>Submit</button>
                    <button onClick={closeModal}>Close</button>
                </form>
            </div>
        </div>
    </div> 
    )
}

// export default modal;