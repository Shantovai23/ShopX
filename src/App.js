import UpperNav from './components/UpperNav'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Categories from './components/Categories'
import Products from './global/Products'
import './App.css';
function App() {
  return (
    <div className='main'>
      <Products>
      <UpperNav/>
      <Navbar/>
      <Slider/>
      <Categories/>
      </Products>
    </div>
  );
}

export default App;
