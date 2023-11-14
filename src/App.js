import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/LandingPage"
import DisplayPage from "./pages/DisplayPage"
import Edit from './pages/Edit';
import Header from "./components/Header"
import Footer from "./components/Footer"



function App() {
  return (
    < >
    <Header/>
      <Routes>
      <Route path='/' element={<LandingPage/>} ></Route>
      <Route path='/displayPage' element={<DisplayPage/>} ></Route>
      <Route path='/edit/:id' element={<Edit/>} ></Route>
</Routes>
<Footer/>
    </>
  );
}

export default App;
