import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './elements/home/Home.js';
import Main from './elements/main/Main.js';
import Contact from './elements/contact/Contact.js';
import NoPage from './elements/noPage/NoPage.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="main" element={<Main />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
