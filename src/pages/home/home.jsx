import './home.css'
import ControlledCarousel from "../../components/carousel/carousel";
import SearchAccordion from "../../components/search/search";
import Card from "../../components/card/card";
// import { Context } from "../../context/context";
import { getRandomRecipes } from './../../utils/api/api'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

// const {currentUser} = Context();
// console.log(currentUser)

const [recipesToShow, setRecipesToShow] = useState(null)

const navigate = useNavigate();

useEffect(() => {  //--> atribuie array de retete la montarea initiala a componentei | face call random din lista de tipuri de bucatarii
    const getRandomRecipesOnMount = async () => {
        const randomCuisineType = () => {
            const arrayCuisineTypes = ['African',
                'American',
                'vegetarian',
                'vegan',
                'main course',
                'snack',
                'drink',
                'British',
                'Cajun',
                'Chinese',
                'Eastern European',
                'European',
                'French',
                'German',
                'Greek',
                'Indian',
                'Irish',
                'Italian',
                'Japanese',
                'Mediterranean',
                'Mexican',
                'Nordic',
                'Southern',
                'Spanish',
                'Thai',
                'Vietnamese']
        
            return arrayCuisineTypes[Math.floor(arrayCuisineTypes.length * Math.random())].toLowerCase()
        } 
        
        //! trebuie intors elementul din array pe pagina ca si 'SHOWING RANDOM 'tralala' RECIPES'

        const res = await getRandomRecipes(`${randomCuisineType()}`, 12);
        setRecipesToShow(res.recipes)
        console.log(res.recipes)
    };
    getRandomRecipesOnMount()
}, [])

const handleOnSearchComplete = (data) => {
    console.log("home", data.results) // -> verifica daca din search primesc date
    setRecipesToShow(data.results)

}

const handleRedirect = (id) => {
    navigate(`/details/${id}`)
}
    return (
        <>
            {/* <div className='background'></div> */}
            <div className='home-container'>

                <div className='interior-home-container'>
                    <div className='left'>
                        <div className='home-carousel'><ControlledCarousel/></div>
                        <SearchAccordion onFetchDataComplete={handleOnSearchComplete}/>
                        <div className='recipes-container'>
                            {recipesToShow && recipesToShow.map((recipe) => <Card key={recipe.id} data={recipe} cardBtnOnClick={handleRedirect}/>)}
                            
                        </div>

                    </div>
                    <div className='right'></div>
                </div>
            </div>
            
        </>
    )
}

export default HomePage;