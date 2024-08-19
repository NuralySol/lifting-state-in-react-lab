import React from 'react';
import Ingredient from './Ingredient';

const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
        <div>
            <h2>Your Burger</h2>
            {stack.length === 0 ? (
                <p>No Ingredients</p>
            ) : (
                <ul>
                    {stack.map((ingredient, index) => (
                        <Ingredient
                            key={index}
                            ingredient={ingredient}
                            removeFromBurger={removeFromBurger}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default BurgerStack;