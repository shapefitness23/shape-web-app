import React, { useState } from 'react';
import { Button } from '../../../ui-library/button';
import { Flex } from '../../../ui-library/flex';
import { InputField } from '../../../ui-library/input';
import './login.css';
import { LoginWithGoogle } from './loginWithGoogle';

export const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Flex className="loginForm" centered flexDirection='column' gap='1.5rem'>
      {
        !isLoggedIn && (

          <Flex gap='1rem' style={{ width: '500px' }} flexDirection='column'>
            <InputField label="Username" />
            <InputField label="Password" type='password' />
            <Flex justifyContent='center'>
              <Button name="Login" />
            </Flex>
          </Flex>
        )
      }
      <LoginWithGoogle updateLoggedIn={(flag) => setIsLoggedIn(flag)} />
    </Flex>
  )
}