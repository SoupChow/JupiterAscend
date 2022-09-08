import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"
import { UserAuthContextProvider } from "./context/UserAuthContext"
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        </Routes>
        </UserAuthContextProvider>
    </div>
  );
}

export default App;
