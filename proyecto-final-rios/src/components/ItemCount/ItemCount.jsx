import React, { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, initial, onAdd }) {
    const [count, setCount] = useState(initial);

    function handlePlusButton() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    function handleMinusButton() {
        debugger;
        if (count > 0) {
            setCount(count - 1)
        }
    }

    function handleFinishButton() {
        console.log("redirect");
    }

    return (
        <div className='item-count-container'>
            <div className="item-count-buttons">
                <button onClick={() => handleMinusButton()}>-</button>
                <input readOnly value={count} />
                <button onClick={() => handlePlusButton()}>+</button>
            </div>
        </div>
    )
}

export default ItemCount