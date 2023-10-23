import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Menu  from './components/Pages/Menu';
import Reservations  from './components/Pages/Reservations';
import OnlineOrder from './components/Pages/OnlineOrder';
import Login from './components/Pages/Login';

import {Routes,Route,BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/reservations" element={<Reservations/>}/>
          <Route path="/order-online" element={<OnlineOrder/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
