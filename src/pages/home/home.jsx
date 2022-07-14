import './home.css'
import ControlledCarousel from "../../components/carousel/carousel";


const HomePage = () => {


    return (
        <>
            <div className='background'></div>
            <div className='home-container'>

                <div className='interior-home-container'>
                    <div className='left'>
                        <div className='home-carousel'><ControlledCarousel/></div>
                        <div className='home-search'>search</div>
                        <div className='recipes-container'>recipes container</div>

                    </div>
                    <div className='right'></div>
                </div>
            </div>
        </>
    )
}

export default HomePage;