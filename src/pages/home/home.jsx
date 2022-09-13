
import ControlledCarousel from "../../components/carousel/carousel";
import SearchAccordion from "../../components/search/search";
import Card from "../../components/card/card";
import { Context } from "../../context/context";
import { getRandomRecipes } from './../../utils/api/api'
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Spinner from '../../components/spinner/spinner';
import './home.css'


const HomePage = ({ isVisible }) => {

    const { currentUser } = Context();
    const [recipesToShow, setRecipesToShow] = useState(null)
    const [pageNr, setPageNr] = useState(0);
    const [totalResults, setTotalResults] = useState(null);
    const [loading, setLoading] = useState(true);

    const randomTerm = useRef();

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
        randomTerm.current = randomCuisineType()
        const getRandomRecipesOnMount = async () => {
            console.log("random")
            setLoading(true)
            let res = null;
            res = await getRandomRecipes(`${randomTerm.current}`, 12);
            if (res.recipes.length === 0) {
                const id = setTimeout(async () => {
                    randomTerm.current = randomCuisineType()
                    res = await getRandomRecipes(`${randomTerm.current}`, 12)
                    clearTimeout(id);
                    setRecipesToShow(res.recipes)
                    setTotalResults(null)
                }, 500)
            }
            else {
                setRecipesToShow(res.recipes)
                setTotalResults(null)
            }
        };
        getRandomRecipesOnMount()
        setLoading(false)
    }, [])

    //! DE CE FACE 2 CALLURI ?!

    const handleOnSearchComplete = (data) => {
        setRecipesToShow(data.results)
        setTotalResults(data.totalResults)
        setLoading(false)
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

    const handleLoading = () => {
        setLoading(true)
    }

    return (
        <>
            {/* <div className='background'></div> */}
            <motion.div animate={{ opacity: isVisible ? 0 : 1 }} className='home-container'>

                <div className='interior-home-container'>
                    <div className='left'>
                        <div className='home-carousel'>
                            <img id='home-image' src="/home-pop.png" alt="" />
                            <ControlledCarousel />
                        </div>
                        <SearchAccordion isLoading={handleLoading} offset={pageNr} onFetchDataComplete={(params) => handleOnSearchComplete(params)} />
                        <div className='showing'>Showing random {randomTerm.current} cuisine recipes</div>
                        {loading || !recipesToShow ? <Spinner /> : <div className='recipes-container'>
                            {recipesToShow && recipesToShow.map((recipe) => <Card key={recipe.id} data={recipe} cardBtnOnClick={handleRedirect} />)}
                        </div>}
                        {totalResults && <div className="pagination">
                            <button className="pag-btn btn btn-primary m-0" onClick={handlePageDecrease} disabled={pageNr === 0}><i className="bi bi-arrow-left-square-fill me-1"></i> Button</button>
                            <p className="m-0 h3">{pageNr + 1}</p>
                            <button className="pag-btn btn btn-primary m-0" onClick={handlePageIncrease}><i className="bi bi-arrow-right-square-fill me-1"></i> Button</button>
                        </div>}
                    </div>
                    <div className='right'></div>
                </div>
            </motion.div>
        </>
    )
}

export default HomePage;