import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpModal from './components/signUp/SignUpModal';
import LogoutModal from './components/logout/LogoutModal';

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
  );
}

export default App;
