import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Admin from './components/Admin/Admin';
import { useAuth } from './contexts/AuthContext';
import ForgotPassword from './components/Login/ForgotPassword';

const AppRoutes = () => {
    const { currentUser } = useAuth()
  
    return(<Router>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={currentUser ? <Navigate to="/"/> : <ForgotPassword />} />

            <Route path='/admin' element={currentUser ? <Admin /> : <Navigate to="/login" />} />

            <Route path='*' element={<Navigate to="/"/>} />
          </Routes>
    </Router>)
}

export default AppRoutes;