import { Route, Routes } from 'react-router-dom';
import BurgerMenu from './components/burgerMenu/BurgerMenu';
import HomePage from './pages/HomePage';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/menu' element={<BurgerMenu/>}></Route>
      </Routes>
  );
}

export default App;
