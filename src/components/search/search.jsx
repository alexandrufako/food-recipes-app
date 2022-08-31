/* eslint-disable react-hooks/exhaustive-deps */
import Accordion from 'react-bootstrap/Accordion';
import './search.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { getSearchedRecipes } from './../../utils/api/api'
import {useState, useEffect} from "react";


function SearchAccordion({onFetchDataComplete}) {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Click here to open a more complex search tab where you can define what recipe you are searching for.
        </Tooltip>
    );

    const [searchQuery, setSearchQuery] = useState({
    search: '',
    cuisine: null,
    diet: null,
    addRecipeNutrition: 'yes',
    excludeIngredients: null,
    includeIngredients: null
    })

    const [simpleSearch, setSimpleSearch] = useState(null);
    const [cuisine, setCuisine] = useState(null);
    const [diet, setDiet] = useState(null);
    const [exclude, setExclude] = useState(null);
    const [include, setInclude] = useState(null);

    const handleChange = (event) => {
        switch (event.target.name) {
            case 'search':
                setSimpleSearch(event.target.value)
                break;
            case 'cuisine-type':
                setCuisine(event.target.value);
                break
            case 'diet-type':
                setDiet(event.target.value);
                break
            case 'include':
                setInclude(event.target.value);
                break
            case 'exclude':
                setExclude(event.target.value);
                break
            default:
                setSimpleSearch(null)
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let tempSearch = {...searchQuery}
        tempSearch.search = simpleSearch 
        tempSearch.cuisine = cuisine 
        tempSearch.diet = diet 
        tempSearch.excludeIngredients = exclude 
        tempSearch.includeIngredients = include 

        setSearchQuery(tempSearch)
    }

    useEffect(() => {
        const getData = async () => {
          
          const res = await getSearchedRecipes(searchQuery.search, searchQuery.cuisine, searchQuery.diet, searchQuery.addRecipeNutrition, searchQuery.excludeIngredients, searchQuery.includeIngredients, 10);
          onFetchDataComplete(res)
          //setComplexSearchDataArray(res);
            // console.log(res.results)
          
        };
        getData();
      }, [searchQuery]);



    return (
        <Accordion className='accordion'>
            <form onSubmit={handleSubmit}>
            <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-header w-80'>

                        <label style={{display: 'inline-block'}}><i className="bi bi-search" ></i></label>
                    <OverlayTrigger
                        placement='bottom-start'
                        delay={{ show: 150, hide: 1000 }}
                        overlay={renderTooltip}
                    >
                        <input style={{display: 'inline-block'}} type='text' name='search' autoComplete='off' placeholder='Search for a recipe' 
                        onChange={handleChange}/>
                    </OverlayTrigger>

                </Accordion.Header>
                <button className='submit-button'>Show me</button>
                <Accordion.Body className='accordion-body w-80 text-center'>
                    <p>In this section you can select some other attributes for a more precise recipe search. Give it a
                        try!</p>
                    <p style={{color: '#a04000'}}>None of the fields are required, complete whatever you want.</p>
                    <div className='accordion-body-elements'>

                        <div style={{border: '1px solid #e5e4e0', borderRadius: 5, marginTop: 10}}>
                            <label>Cuisine type:</label>
                            <input type='text' name='cuisine-type' autoComplete='off' onChange={handleChange}
                                   placeholder='Ex: mexican, romanian, italian, etc...'></input>
                        </div>

                        <div style={{border: '1px solid #e5e4e0', borderRadius: 5, marginTop: 10}}>
                            <label>Diet type:</label>
                            <input type='text' name='diet-type' autoComplete='off' onChange={handleChange}
                                   placeholder='Ex: ketogenic, gluten free, vegetarian'></input>
                        </div>

                        <div style={{border: '1px solid #e5e4e0', borderRadius: 5, marginTop: 10}}>
                            <label>Include ingredients:</label>
                            <input type='text' name='include' autoComplete='off' onChange={handleChange}
                                   placeholder='Separate them by comma. Ex: tomatoes, shrimp...'></input>
                        </div>

                        <div style={{border: '1px solid #e5e4e0', borderRadius: 5, marginTop: 10}}>
                            <label>Exclude ingredients:</label>
                            <input type='text' name='exclude' autoComplete='off' onChange={handleChange}
                                   placeholder='Separate them by comma. Ex: tomatoes, shrimp...'></input>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            </form>
        </Accordion>
    );
}

export default SearchAccordion;

// query = string; what u search
// cuisine = string; cuisine type
// diet = string; type of diet
// addRecipeNutrition = boolean; If set to true, you get nutritional information about each recipes returned.
// excludeIngredients = string, A comma-separated list of ingredients or ingredient types that the recipes must not contain.
// includeIngredients = string, A comma-separated list of ingredients that should/must be used in the recipes.

