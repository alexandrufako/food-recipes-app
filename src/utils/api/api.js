// noinspection SpellCheckingInspection

const baseRecipesUrl = 'https://api.spoonacular.com/recipes/';

const recipeSearchUrl = 'https://api.spoonacular.com/recipes/complexSearch';
//      ex: GET https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2
// query = string; what u search
// cuisine = string; cuisine type
// diet = string; type of diet
// addRecipeNutrition = boolean; If set to true, you get nutritional information about each recipes returned.
// excludeIngredients = string, A comma-separated list of ingredients or ingredient types that the recipes must not contain.
// includeIngredients = string, A comma-separated list of ingredients that should/must be used in the recipes.
// number = number; The number of expected results (between 1 and 100).

const recipeInformationUrl = 'https://api.spoonacular.com/recipes/{id}/information';
//      ex:
// id = number; the id of the recipe(get from recipeSearch)
// includeNutrition = boolean; Include nutrition data in the recipe information. Nutrition data is per serving. If you want the nutrition data for the entire recipe, just multiply by the number of servings.

const recipeNutritionUrl = 'https://api.spoonacular.com/recipes/{id}/nutritionWidget.json';
//      ex:
// id = number; the id of the recipe(get from recipeSearch)

const recipeInstructionsUrl = 'https://api.spoonacular.com/recipes/{id}/analyzedInstructions';
//      ex:
// id = number; the id of the recipe(get from recipeSearch)
// stepBreakdown = boolean; Whether to break down the recipe steps even more.

const ingredientSubstituteUrl = 'https://api.spoonacular.com/food/ingredients/substitutes';
//      ex: https://api.spoonacular.com/food/ingredients/substitutes?ingredientName=butter;
// ingredientName = string; The name of the ingredient you want to replace.

const computeShoppingListUrl = 'https://api.spoonacular.com/mealplanner/shopping-list/compute';
//      ex: POST https://api.spoonacular.com/mealplanner/shopping-list/compute
// {
//     "items": [
//     "4 lbs tomatoes",
//     "10 tomatoes",
//     "20 Tablespoons Olive Oil",
//     "6 tbsp Olive Oil"
// ]
// }


const getSearchedRecipes = async (query, cuisineType, dietType, recipeNutrition, excludeIng, includeIng, nr) => {
    let cui = `cuisine=${cuisineType}`
    let diet = `diet=${dietType}`
    let nutrit = `addRecipeNutrition=${recipeNutrition}`
    let exclude = `excludeIngredients=${excludeIng}`
    let include = `includeIngredients=${includeIng}`
    let number = nr || 10
    const response = await fetch(`${recipeSearchUrl}?query=${query}&${cuisineType && cui}&${dietType && diet}&${recipeNutrition && nutrit}&${excludeIng && exclude}&${includeIng && include}&${number}`);
    return await response.json();
};

const getRecipeInformation = async (id) => {
    const response = await fetch(`${baseRecipesUrl}${id}/information`);
    return await response.json();
}

const getRecipeNutrition = async (id) => {
    const response = await fetch(`${baseRecipesUrl}${id}/analyzedInstructions`);
    return await response.json();
}

const getIngredientSubstitute = async(ingredientName) => {
    const response = await fetch(`${ingredientSubstituteUrl}?ingredientName=${ingredientName}`);
    return await response.json();
}

export {getRecipeNutrition, getRecipeInformation, getIngredientSubstitute, getSearchedRecipes}