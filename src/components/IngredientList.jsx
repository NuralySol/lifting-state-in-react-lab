import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = ({ ingredients, addToBurger }) => {
    return (
        <ul>
            {ingredients.map((ingredient, index) => (
                <Ingredient key={index} ingredient={ingredient} addToBurger={addToBurger} />
            ))}
        </ul>
    );
};

export default IngredientList;