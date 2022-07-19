import Accordion from 'react-bootstrap/Accordion';
import './search.css'
import {useEffect} from "react";


function SearchAccordion() {
    return (
        <Accordion className='accordion'>
            <form>
            <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-header w-80'>

                        <label style={{display: 'inline-block'}}><i className="bi bi-search" ></i></label>
                        <input style={{display: 'inline-block'}} type='text' name='search' autoComplete='off' placeholder='Search for a recipe' />


                </Accordion.Header>
                <button className='submit-button'>Show me</button>
                <Accordion.Body className='accordion-body w-80 text-center'>
                    <p>In this section you can select some other attributes for a more precise recipe search. Give it a try!</p>
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

