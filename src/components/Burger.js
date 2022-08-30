import React, { Component, useState } from 'react';
import './Burger.css';
import ButtonContainer from './ButtonContainer'
import { Ingredient } from './Ingredient';


export const Burger = () => {
    const [state, setState] = useState({
        lettuce: 0,
        tomato: 0,
        cheese: 0,
        meat: 0
    })
    const price = ( state.lettuce * 1) + (state.cheese * 2) + (state.tomato*0.5) + (state.meat*3)

    const addRemoveIngredient = (action, ingredient) => {
        switch (action) {
            case 'add':
                setState(previousState => ({
                    ...previousState, [ingredient]: state[ingredient] + 1
                }))
                break;
            case 'remove':
                if (state[ingredient] > 0)
               { setState(previousState => ({
                    ...previousState, [ingredient]: state[ingredient] - 1
                }))
            }
                break;
            default:
                return false;

        }
    }
    return (
        <>
            <div className="burgerIngredients">
                <div className="topSide"></div>
                <Ingredient type={state.lettuce} className="lettuseSide" />
                <Ingredient type={state.cheese} className="cheeseSide" />
                <Ingredient type={state.meat} className="meatSide" />
                <Ingredient type={state.tomato} className="tomatoSide" />
                <div className="bottomSide"></div>
            </div>
            <div className="ingredientsBlock">
            <h>{price}</h>
                <ButtonContainer addRemoveIngredient={addRemoveIngredient} type={'tomato'} />
                <ButtonContainer addRemoveIngredient={addRemoveIngredient} type={'lettuce'} />
                <ButtonContainer addRemoveIngredient={addRemoveIngredient} type={'meat'} />
                <ButtonContainer addRemoveIngredient={addRemoveIngredient} type={'cheese'} />
            </div>
        </>
    );
}

export default Burger;
