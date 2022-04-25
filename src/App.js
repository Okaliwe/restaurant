import Navbar from './navbar';
import { BrowserRouter as Router, Routes,Route,} from "react-router-dom";
import Home from './Home';
import './App.css';
import Contact from './Component/contact';
import Product from './Component/Product';
import About from './Component/about';
import Footer from './Component/footer';
import Terms from './Component/terms';

function App() {
  return (
    <div>
      
      <Router>
      <Navbar/>
        <Routes>
            <Route exact path='/'element={<Home/>}></Route>
            <Route  path='/contact'element={<Contact/>}></Route>
            <Route path='/Product'element={<Product/>}></Route>
            <Route path='/about'element={<About/>}></Route>
            <Route path='/terms'element={<Terms/>}></Route>
        </Routes>
         <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
