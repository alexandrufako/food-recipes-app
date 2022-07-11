import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "../src/components/header/header";
import HomePage from "../src/pages/home/home";
import LoginPage from "../src/pages/login/login";
import UserAccountPage from "../src/pages/account/account";
import BlogPage from "../src/pages/blog/blog";
import RecipeDetails from "../src/pages/recipe/recipe";

function App() {
  return (
    <div className="App">
      {/*<LoginPage />*/}
      <Router>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/recipe-details/:id' element={<RecipeDetails/>} />
          <Route path='/blog' element={<BlogPage/>} />
          <Route path='/user' element={<UserAccountPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
