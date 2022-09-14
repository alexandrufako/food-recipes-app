import './card.css'

const Card = (props) => {
  const recipe = props.data
  return (
      <div className='card-container'>
        <div className='card-image'>
          <img src={recipe.image} alt='recipe' />
        </div>
        <div className='card-title'>
          <p>{recipe.title}</p>
        </div>
        <div className='btns'>
          <button id="card-details-btn" onClick={() => props.cardBtnOnClick(recipe.id)}>See more</button>
          {<button className="add-favourites" onClick={() => props.cardBtnAddFavourites(recipe.title, recipe.id, recipe.image)}>{props.secondButtonLabel || 'Add to favorites'}</button>}
        </div>
      </div>
  )
}

export default Card;
