import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Rooms from './pages/Rooms';
import Room from './pages/Room';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/room" element={<Room />} />
    </Routes>
  );
  
};

export default App;
