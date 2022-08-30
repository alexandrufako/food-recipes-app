import './card.css'

const Card = (object) => {
  const recipe = object.object
  return (
      <div className='card-container'>
        <div className='card-image'>
          <img src={recipe.image} alt='recipe' />
          {console.log(recipe.title)}
        </div>
        <div className='card-title'>
          <p>{recipe.title}</p>
        </div>
        <div>
          <button id="card-details-btn">See more</button>
        </div>
      </div>
  )
}

export default Card;


// id: 716426
// image: "https://spoonacular.com/recipeImages/716426-312x231.jpg"
// imageType: "jpg"
// title: "Cauliflower, Brown Rice, and Vegetable Fried Rice"