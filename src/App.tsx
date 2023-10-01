import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Authentication } from './components/auth';
import './App.css';

function App() {
  return (
    <GoogleOAuthProvider clientId="1076068628081-0odjmsav2v6qkkhnuvde8ns853o3tpq6.apps.googleusercontent.com">
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
