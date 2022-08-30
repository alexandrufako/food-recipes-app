import './home.css'
import ControlledCarousel from "../../components/carousel/carousel";
import SearchAccordion from "../../components/search/search";
import Card from "../../components/card/card";
import { Context } from "../../context/context";

const HomePage = () => {

const {currentUser} = Context();
console.log(currentUser)

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
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                            <Card />
                        </div>

                    </div>
                    <div className='right'></div>
                </div>
            </div>
        </>
    )
}

export default HomePage;