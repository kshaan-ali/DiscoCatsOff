import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TimeVaults from './pages/TimeVaults';
import Navbar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<TimeVaults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
