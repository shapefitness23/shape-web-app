import React, { useState } from 'react';
import { Button } from '../../../ui-library/button';
import { Flex } from '../../../ui-library/flex';
import { Link2, Subtext } from '../../../ui-library/typography';
import { InputField } from '../../../ui-library/input';
import { LoginWithGoogle } from './loginWithGoogle';
import './login.css';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate()
  return (
    <Flex alignItemsCenter className="loginFormContianer" >
      <Flex className="loginForm" centered flexDirection='column' gap='1.5rem'>
        <Flex gap='1rem' style={{ width: '480px' }} flexDirection='column'>
          <InputField label="Username" />
          <InputField label="Password" type='password' />
          <Flex justifyContent='center'>
            <Button name="Login" />
          </Flex>
        </Flex>

        <LoginWithGoogle />
        <Flex gap='0.5rem' alignItemsCenter>
          <Subtext>
            Don’t have an account?
          </Subtext>
          <Link2 onClick={() => navigate('/signup')}>Register</Link2>
        </Flex>
      </Flex>
    </Flex>
  )
}