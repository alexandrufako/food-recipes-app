/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeInformation, getRelatedRecipes } from "./../../utils/api/api";
import "./details.css";

const Details = () => {
    const [recipeInformation, setRecipeInformation] = useState();
    const [relatedRecipe, setRelatedRecipe] = useState()

    const params = useParams();
    useEffect(() => {
        const getDataById = async () => {
            const info = await getRecipeInformation(params.id);
            setRecipeInformation(info);
        };
        getDataById();

        const getRelatedById = async () => {
            const related = await getRelatedRecipes(params.id, 3);
            setRelatedRecipe(related)
        }
        getRelatedById();
    }, []);

    console.log(params.id);
    console.log(recipeInformation);
    console.log(relatedRecipe)

    return (
        recipeInformation && <div className="details-background">
            {/* <div className="background"></div> */}

            <div className="details-container">

                <h4>Details - {recipeInformation.title}</h4>
                <div className="top-image-container" ><img src={recipeInformation.image} alt="" /></div >
                <div className="two-containers">
                    <div>
                        <div> Liked by {recipeInformation.aggregateLikes} people</div>
                        <div className="review-container">quote</div>
                    </div>
                    <div className="short-details" >
                        <p>ready in: {recipeInformation.readyInMinutes} min</p>
                        <p>servings: {recipeInformation.servings}</p>
                        <p>dish tipes: {recipeInformation.dishTypes.map(element => `${element}, `)}</p>
                    </div>
                </div>
                <div className="ingredients-container">
                    <div className="text">Ingredients</div>
                    <div className="list">
                        <ol>
                            {recipeInformation.extendedIngredients.map((ingredient) => <li key={ingredient.id}>{ingredient.name}</li>)}
                        </ol>
                    </div>
                </div>
                <div className="instructions-container">
                    <div className="text">Instructions</div>
                    <div className="list">
                        <ol>
                            {recipeInformation.analyzedInstructions[0].steps.map((instruction) => <li key={instruction.id}>{instruction.step}</li>)}
                        </ol>
                    </div>
                </div>
                <div className="made-it">
                    <button className="made-it-btn">I made it -{">"} </button>
                </div>
                <div className="related-recipes-container">
                    <div className="related-recipes-text">
                        <h3><p>related</p><p>recipes</p></h3>
                    </div>
                    {relatedRecipe && relatedRecipe.map((recipe) =>
                        <div key={recipe.id} className="related-recipes-card">
                            <div className="related-image"><button className="related-btn"><a href={`${recipe.sourceUrl}`} target='blank'> Go to recipe </a></button></div>
                            <div className="related-title">{recipe.title}</div>
                        </div>)}
                    
                </div>
            </div >
        </div>
    );
};

export default Details;

/*
* RECIPE INFORMATION: 
* .aggregateLikes
* .analyzedInstructions = un array cu un singur obiect  ...cred ?!
!       .steps = array de obiecte \ trebuie mappat, contine 
!            .equipment(array obiecte .name=string), 
!            .ingredients(array obiecte .name=string), 
!            .length(.number = nr, .unit = string) 
!            .step(string instructiune) 
* .cuisines(array de stringuri), 
* .diets (array stringuri), 
* .dishTypes (array stringuri)
* .image (link)
* .instructions (string cu instructiuni)
* .readyInMinutes (number)
* .servings
* .sourceURL (link la sursa)
* .summary (string)
* .title (denumire)
* .winePairing.pairingText

! .extendedIngredients (array de obiecte)
!        .original = string
!        .measures.metric => .amount si .unitShort
 */
