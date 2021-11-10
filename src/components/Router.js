import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from "./Header/Header";
import Home from "./Home/Home";
import Profile from "./Profile/Profile";
import Community from "./Community/Community";

export default () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/Profile' element={<Profile />} />
      <Route exact path='/Community' element={<Community />} />
    </Routes>
  </BrowserRouter>
);