import './home.css'
import ControlledCarousel from "../../components/carousel/carousel";
import SearchAccordion from "../../components/search/search";
import Card from "../../components/card/card";
import { Context } from "../../context/context";
import { getRandomRecipes } from './../../utils/api/api'
import { useState } from 'react';
import { useEffect } from 'react';

const HomePage = () => {

// const {currentUser} = Context();
// console.log(currentUser)

const [receivedData, setReceivedData] = useState(null)
const [randomRecipesArray, setRandomRecipesArray] = useState(null)

useEffect(() => {
    const getRandomRecipesOnMount = async () => {
        const res = await getRandomRecipes("vegetarian", 12);
        setRandomRecipesArray(res.recipes)
        console.log(res.recipes)
    };
    getRandomRecipesOnMount()
}, [])

const handleOnSearchComplete = (data) => {
    console.log("home", data)
}
    return (
        <>
            <div className='background'></div>
            <div className='home-container'>

                <div className='interior-home-container'>
                    <div className='left'>
                        <div className='home-carousel'><ControlledCarousel/></div>
                        <SearchAccordion onFetchDataComplete={handleOnSearchComplete}/>
                        <div className='recipes-container'>
                            {randomRecipesArray && randomRecipesArray.map((recipe) => <Card key={recipe.id} object={recipe}/>)}
                            
                        </div>

                    </div>
                    <div className='right'></div>
                </div>
            </div>
        </>
    )
}

export default HomePage;