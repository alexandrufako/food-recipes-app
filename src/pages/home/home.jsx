import './home.css'
import ControlledCarousel from "../../components/carousel/carousel";
import SearchAccordion from "../../components/search/search";
import Card from "../../components/card/card";
import { Context } from "../../context/context";
import { getRandomRecipes } from './../../utils/api/api'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {

    const { currentUser } = Context();
    console.log(currentUser)

    const [recipesToShow, setRecipesToShow] = useState(null)
    const [pageNr, setPageNr] = useState(0);
    const [totalResults, setTotalResults] = useState(null);
    

    const navigate = useNavigate();

    const randomCuisineType = () => {
        const arrayCuisineTypes = ['African',
            'American',
            'vegetarian',
            'vegan',
            'snack',
            'drink',
            'British',
            'Chinese',
            'European',
            'French',
            'Greek',
            'Italian',
            'Japanese',
            'Mediterranean',
            'Mexican',
            'Southern',
            'Spanish',
            'Vietnamese']

        return arrayCuisineTypes[Math.floor(arrayCuisineTypes.length * Math.random())].toLowerCase()
    }

    useEffect(() => {  //--> atribuie array de retete la montarea initiala a componentei | face call random din lista de tipuri de bucatarii
        const getRandomRecipesOnMount = async () => {
            

            //! trebuie intors elementul din array pe pagina ca si 'SHOWING RANDOM 'tralala' RECIPES'

            const res = await getRandomRecipes(`${randomCuisineType()}`, 12);
            setRecipesToShow(res.recipes)
            console.log(res)
            setTotalResults(null)
        };
        getRandomRecipesOnMount()
    }, [])

    //! DE CE FACE 2 CALLURI ?!

    const handleOnSearchComplete = (data) => {
        console.log("home", data) // -> verifica daca din search primesc date
        setRecipesToShow(data.results)
        setTotalResults(data.totalResults)
    }

    const handleRedirect = (id) => {
        navigate(`/details/${id}`)
    }

    const handlePageIncrease = () => {
        setPageNr(state => state + 1)
    }

    const handlePageDecrease = () => {
        setPageNr(state => state - 1)
    }

    return (
        <>
            {/* <div className='background'></div> */}
            <div className='home-container'>

                <div className='interior-home-container'>
                    <div className='left'>
                        <div className='home-carousel'>
                            <img id='home-image' src="/home-pop.png" alt="" />
                            <ControlledCarousel />
                        </div>
                        <SearchAccordion offset={pageNr} onFetchDataComplete={(params) => handleOnSearchComplete(params)} />
                        <div className='showing'>Showing random {randomCuisineType()} cuisine recipes</div>
                        <div className='recipes-container'>
                            {recipesToShow && recipesToShow.map((recipe) => <Card key={recipe.id} data={recipe} cardBtnOnClick={handleRedirect} />)}

                        </div>
                      {totalResults &&  <div className="pagination">
                            <button className="pag-btn btn btn-primary m-0" onClick={handlePageDecrease} disabled={pageNr===0}><i className="bi bi-arrow-left-square-fill me-1"></i> Button</button>
                            <p className="m-0 h3">{pageNr+1}</p>
                            <button className="pag-btn btn btn-primary m-0" onClick={handlePageIncrease}><i className="bi bi-arrow-right-square-fill me-1"></i> Button</button>
                        </div>}

                    </div>

                    <div className='right'></div>
                </div>

            </div>

        </>
    )
}

export default HomePage;