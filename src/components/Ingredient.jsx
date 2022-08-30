export const Ingredient = ({ type, className }) => (
  [...Array(type)].map((index) => <div key={index} className={className} />)
)


export default Ingredient
