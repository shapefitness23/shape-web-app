import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';
import './App.css';
import { Login } from './components/auth/login';
import { SignUp } from './components/auth/signup';
import { Home } from './components/home';

function App() {
  return (
    <GoogleOAuthProvider clientId="1076068628081-0odjmsav2v6qkkhnuvde8ns853o3tpq6.apps.googleusercontent.com">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
