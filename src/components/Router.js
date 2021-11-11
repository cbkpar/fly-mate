import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from "./Header/Header";
import Home from "./Home/Home";
import Myplan from "./Myplan/Myplan";
import Community from "./Community/Community";

export default () => (
  /* github 배포용
  <BrowserRouter basename={process.env.PUBLIC_URL}>
  */
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/Myplan' element={<Myplan />} />
      <Route path='/Community' element={<Community />} />
    </Routes>
  </BrowserRouter>
);