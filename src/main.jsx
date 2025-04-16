import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './component/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import City from './pages/City.jsx';
import Partner from './pages/Partner.jsx';
import GokidoTool from './pages/GokidoTool.jsx';
import Login from './pages/Login.jsx';
import SignupPage from './pages/SignupPage.jsx';
import Imprint from './pages/Imprint.jsx';
import Conditions from './pages/Conditions.jsx';
import Cookie from './pages/Cookie.jsx';
import Faq from './pages/Faq.jsx';
import Privacy from './pages/Privacy.jsx';
import PartnerDetailPage from './pages/PartnerDetailPage.jsx';



// Create the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
     <Route index element={<Home />} />
    <Route path="City" element={<City />} />
      <Route path="Partner" element={<Partner />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="gokido-tool" element={<GokidoTool />} />
      <Route path="Login" element={<Login />} />
      <Route path="SignupPage" element={<SignupPage/>} />
      <Route path="Privacy" element={<Privacy />}/>
      <Route path="imprint" element={<Imprint/>}/>
      <Route path="conditions" element={<Conditions/>}/>
      <Route path="cookie" element={<Cookie/>}/>
      <Route path="faq" element={<Faq/>}/>
      <Route path="privacy" element={<Privacy/>}/>
      <Route path="/partner/:partnerId" element={<PartnerDetailPage />} /> {/* Fixed 'component' to 'element' */}
    </Route>
  )
);

// Render the app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

