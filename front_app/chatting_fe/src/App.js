import { Routes, Route } from 'react-router-dom';
import CommonLayout from './layouts/CommonLayout';
import MainPage from './pages/MainPage';
import Rooms from './pages/Rooms';
import Room from './pages/Room';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/room" element={<Room />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
  
};

export default App;
