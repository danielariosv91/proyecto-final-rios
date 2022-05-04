import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <button onClick={() => (count <= stock) && onAdd(count)}>Agregar al carrito</button>
            <Link to={'/cart'}>Finalizar compra</Link>
        </div>
    )
}

export default ItemCount