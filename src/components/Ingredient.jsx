import React from 'react';

const Ingredient = ({ ingredient, addToBurger, removeFromBurger }) => {
    return (
        <li style={{ color: ingredient.color }}>
            {ingredient.name}
            {addToBurger && <button onClick={() => addToBurger(ingredient)}>Add</button>}
            {removeFromBurger && <button onClick={removeFromBurger}>Remove</button>}
        </li>
    );
};

export default Ingredient;