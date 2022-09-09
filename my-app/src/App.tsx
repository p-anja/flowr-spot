import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import styles from './App.module.scss';
import HomePage from './pages/HomePage';
import SignUpModal from './components/signUp/SignUpModal';

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/modal' element={<SignUpModal/>}></Route>
      </Routes>
  );
}

export default App;
