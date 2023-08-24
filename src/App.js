import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home.js';
import Layout from './pages/layout/Layout.js';
import Main from './pages/main/Main.js';
import Contact from './pages/contact/Contact.js';
import Listing from './pages/listing/Listing.js'
import NoPage from './pages/noPage/NoPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="main" element={<Main />} />
          <Route path="contact" element={<Contact />} />
          <Route path='/listing/:itemId' element={<Listing />} />
          <Route path='/category/:cat' element={<Category />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
