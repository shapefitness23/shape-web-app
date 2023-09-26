import React from 'react';
import './App.css';
import { Login } from './components/auth/login';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="1076068628081-0odjmsav2v6qkkhnuvde8ns853o3tpq6.apps.googleusercontent.com">
      <Login />
    </GoogleOAuthProvider> 
  );
}

export default App;
