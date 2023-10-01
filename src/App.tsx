import React from 'react';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Authentication } from './components/auth';

function App() {
  return (
    <GoogleOAuthProvider clientId="1076068628081-0odjmsav2v6qkkhnuvde8ns853o3tpq6.apps.googleusercontent.com">
      <Authentication />
    </GoogleOAuthProvider>
  );
}

export default App;
