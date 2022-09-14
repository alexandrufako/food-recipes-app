import { Context } from "../../context/context";
import Card from "../../components/card/card";
import { useNavigate } from "react-router-dom";
import "./blog.css";

const BlogPage = () => {
    const { favourites, setFavourites } = Context();
    const navigate = useNavigate();
    const handleRedirect = (id) => {
        navigate(`/details/${id}`);
    };

    return (
        <div className="fav-recipes">
            {favourites.length < 1 ? <div className="no-recipes">
                <div className="no-text">
                Sorry, you have no favourite recipes to show...
                Please go back to main page and select some recipes!
                </div>
                <div className="no-image">
                    <img src="food_cat.webp" height={300} alt="" />
                </div>
            </div>
                : <div className="blog-container">
                    {favourites.map((recipe) => (
                        <Card
                            key={recipe.id}
                            data={recipe}
                            cardBtnOnClick={handleRedirect}
                            cardBtnAddFavourites={() =>
                                setFavourites((state) =>
                                    state.filter((elem) => elem.id !== recipe.id)
                                )
                            }
                            secondButtonLabel={`Delete Button`}
                        />
                    ))}
                </div>}
        </div>
    );
};

export default BlogPage;
