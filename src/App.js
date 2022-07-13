import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../src/components/header/header";
import HomePage from "../src/pages/home/home";
import LoginPage from "../src/pages/login/login";
import UserAccountPage from "../src/pages/account/account";
import BlogPage from "../src/pages/blog/blog";
import RecipeDetails from "../src/pages/recipe/recipe";
import {Provider} from "./context/context";
import ProtectedRoute from './components/protectedRoute/protectedRoute'

function App() {
    return (
        <Provider>
            <div className="App">
                {/*<LoginPage />*/}
                <Router>
                    <Header/>
                    <Routes>
                        <Route index element={<HomePage/>}/>
                        <Route path='/login' element={<LoginPage/>}/>
                        <Route path='/recipe-details/:id' element={<RecipeDetails/>}/>
                        <Route path='/blog' element={<BlogPage/>}/>
                        <Route path='/user' element={<UserAccountPage/>} />
                        {/*<Route path='/user' element={<ProtectedRoute><UserAccountPage/></ProtectedRoute>}/>*/}
                    </Routes>
                </Router>
            </div>
        </Provider>
    );
}

export default App;
