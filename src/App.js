import React, { Suspense, lazy } from 'react';
import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/common/loader";
import Protected from './Protected';

const LayoutMain = lazy(() => import("./components/layoutMain"));
const LoginAndRegister = lazy(() => import("./components/loginAndRegister"));
const Home = lazy(() => import("./components/home"));
const ProfileUpdate = lazy(() => import("./components/profileUpdate"));

const ContactUs = lazy(() => import("./components/contactUs"));
const MailTest = lazy(() => import("./components/mailTest"));

function App() {
  

  return (
    
      <div className="App">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
        
        <Routes>

        <Route path="login" element={<LoginAndRegister />} /> 
        
          <Route path="/" element={<Protected Component={LayoutMain}/>}>
            <Route index element={<Protected Component={Home}/>} />
            <Route path='profile' element={<Protected Component={ProfileUpdate}/>} />
            <Route path="mail-test" element={<Protected Component={MailTest}/>} />
            <Route path="contact-us" element={<Protected Component={ContactUs}/>} />
          </Route>
          

        </Routes>
        
      </BrowserRouter>
    </Suspense>
    </div>
  );
}

export default App;
