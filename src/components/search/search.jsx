import Accordion from 'react-bootstrap/Accordion';
import './search.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


function SearchAccordion() {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Click here to open a more complex search tab where you can define what recipe you are searching for.
        </Tooltip>
    );

    return (
        <Accordion className='accordion'>
            <form>
            <Accordion.Item eventKey="0">
                <Accordion.Header className='accordion-header w-80'>

                        <label style={{display: 'inline-block'}}><i className="bi bi-search" ></i></label>
                    <OverlayTrigger
                        placement='bottom-start'
                        delay={{ show: 150, hide: 1000 }}
                        overlay={renderTooltip}
                    >
                        <input style={{display: 'inline-block'}} type='text' name='search' autoComplete='off' placeholder='Search for a recipe' />
                    </OverlayTrigger>

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

