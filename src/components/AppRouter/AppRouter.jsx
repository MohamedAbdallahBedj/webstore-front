import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import NavigationResponsive from '../Navigation/NavigationResponsive';
import Footer from '../Footer/Footer';
import Copyright from '../Copyright/Copyright';
import Home from '../../pages/Home/Home';
import Login from '../Login/Login';
import Auth from '../../pages/Auth/Auth';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <NavigationResponsive />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/authentication" element={<Auth />} />
        <Route path="*" element={<>Not found</>} />
      </Routes>
      <Footer />
      <Copyright />
    </BrowserRouter>
  );
}


