import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../components/header/header";
import HomePage from "../pages/home/home";
import LoginPage from "../pages/login/login";
import UserAccountPage from "../pages/account/account";
import BlogPage from "../pages/blog/blog";
import RecipeDetails from "../pages/recipe/recipe";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<LoginPage />} />
          <Route path='/' element={<HomePage/>} />
          <Route path='/recipe-details/:id' element={<RecipeDetails/>} />
          <Route path='/blog' element={<BlogPage/>} />
          <Route path='/user' element={<UserAccountPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
