import { useCallback, useMemo, useReducer } from 'react'
import './Burger.css'
import { Ingredient } from './Ingredient'
import ButtonContainer from './ButtonContainer'

export const Burger = () => {
  const initialState = {
    lettuce: 0,
    tomato: 0,
    cheese: 0,
    meat: 0
  }

  const reducer = useCallback((state, action) => {
    switch (action.type) {
      case 'add':
        return { ...state, [action.ingredient]: state[action.ingredient] + 1 }
      case 'remove':
        if (state[action.ingredient] > 0) {
          return { ...state, [action.ingredient]: state[action.ingredient] - 1 }
        } else {
          return state
        }
      default:
        return state
    }
  }, [])

  const [state, dispatch] = useReducer(reducer, initialState)

  const price = useMemo(() => (state.lettuce * 1) + (state.cheese * 2) + (state.tomato * 0.5) + (state.meat * 3),
    [state]
  )

  return (
    <>
      <div className='burgerIngredients'>
        <div className='topSide' />
        {Object.keys(state).map((key) => (
          <Ingredient type={state[key]} className={key} key={key} />
        ))}
        <div className='bottomSide' />
      </div>
      <div className='ingredientsBlock'>
        <h>{price}</h>
        {Object.keys(state).map((key) => (
          <ButtonContainer state={key} dispatch={dispatch} key={key} />
        ))}
      </div>

    </>
  )
}

export default Burger
