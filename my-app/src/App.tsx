import { Route, Routes } from 'react-router-dom';
import NotificationModal from './components/notificationModal/NotificationModal';
import HomePage from './pages/HomePage';

const App = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
  );
}

export default App;
