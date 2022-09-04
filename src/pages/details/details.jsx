import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getRecipeInformation } from "./../../utils/api/api";
import "./details.css";

const Details = () => {
    const [recipeInformation, setRecipeInformation] = useState();

    const params = useParams();
    useEffect(() => {
        const getDataById = async () => {
            const info = await getRecipeInformation(params.id);
            setRecipeInformation(info);
        };
        getDataById();
    }, [params]);

    console.log(params);
    console.log(recipeInformation);

    return (
    <div className="details-background">
        {/* <div className="background"></div> */}

        <div className="details-container">

            Details - {params.id}
            <div div className="top-image-container" > this should be an image</div >
            <div className="two-containers">
                <div>
                    <div> Liked by ... people</div>
                    <div className="review-container">quote</div>
                </div>
                <div className="short-details"> some details on the right</div>
            </div>
            <div className="ingredients-container">
                <div className="text">Ingredients</div>
                <div className="list">
                    <ol>
                        <li>list item of ingredients</li>
                        <li>list item of ingredients</li>
                        <li>list item of ingredients</li>
                        <li>list item of ingredients</li>
                    </ol>
                </div>
            </div>
            <div className="instructions-container">
                <div className="text">Instructions</div>
                <div className="list">
                    <ol>
                        <li>list item of ingredients</li>
                        <li>list item of ingredients</li>
                        <li>list item of ingredients</li>
                        <li>list item of ingredients</li>
                    </ol>
                </div>
            </div>
            <div className="made-it">
                <button className="made-it-btn">I made it -{">"} </button>
            </div>
            <div className="related-recipes-container">
                <div className="related-recipes-text">
                    <h3>related recipes</h3>
                    <p>text</p>
                </div>
                <div className="related-recipes-card">
                    <div className="related-image">Image</div>
                    <div className="related-title">title</div>
                </div>
                <div className="related-recipes-card">
                    <div className="related-image">Image</div>
                    <div className="related-title">title</div>
                </div>
                <div className="related-recipes-card">
                    <div className="related-image">Image</div>
                    <div className="related-title">title</div>
                </div>
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
