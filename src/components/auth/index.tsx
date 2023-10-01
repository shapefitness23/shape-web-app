import React, { useState } from 'react';
import { Login } from './login';
import { SignUp } from './signup';

export const Authentication = () => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    showLogin ? <Login hideSignup={() => setShowLogin(false)} /> : <SignUp />
  )
}