import './Burger.css'

export const ButtonContainer = ({ state, dispatch }) => (
  <div>
    <div>{state}</div>
    <div className='ingrBtns'>
      <button className='ingrBtn' onClick={() => dispatch({ ingredient: state, type: 'add' })}>Add</button>
      <button className='ingrBtn' onClick={() => dispatch({ ingredient: state, type: 'remove' })}>Remove</button>
    </div>
  </div>
)

export default ButtonContainer
