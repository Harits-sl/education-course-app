import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';

function App() {
  return (
    <div className="font-dm-sans text-sm md:text-base">
      <Routes>
        <Route
          path="/"
          element={<LoginPage />}
        />
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/register"
          element={<RegisterPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
