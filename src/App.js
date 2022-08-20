import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import LogIn from './Components/LogIn/LogIn';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import PrivateRoute from './Components/PrivateRouter/PrivateRoute';
import Register from './Components/Register/Register';
import Shipping from './Components/ShippinCost/Shipping';

function App() {
  return (
    <AuthProvider>
          <BrowserRouter>
        <div className="app">
          <Header></Header>
          <Routes> 
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route element={<PrivateRoute/>}>
                <Route path="/shipping" element={<Shipping/>} exact />
                <Route path="/placeOrder" element={<PlaceOrder/>} />
            </Route>
            <Route path="/logIn" element={<LogIn/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
