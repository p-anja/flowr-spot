import { Route, Routes } from 'react-router-dom';
import BurgerMenu from './components/burgerMenu/BurgerMenu';
import LoginForm from './components/login/LoginForm';
import HomePage from './pages/HomePage';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/login' element={<LoginForm/>}></Route>
      </Routes>
  );
}

export default App;
