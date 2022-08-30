
export const ButtonContainer = ({ addRemoveIngredient , type}) => (
  <div>
    <p>{type}</p>
    <div className="ingrBtns">
      <button className="ingrBtn" onClick={() => addRemoveIngredient('add', type)}>Add</button>
      <button className="ingrBtn" onClick={() => addRemoveIngredient('remove', type)}>Remove</button>
    </div>
  </div >
)

export default ButtonContainer
