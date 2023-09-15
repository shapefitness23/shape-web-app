import React from 'react';
import { Button } from '../../../ui-library/button';
import { Flex } from '../../../ui-library/flex';
import { InputField } from '../../../ui-library/input';
import './login.css';

export const Login = () => {
  return (
    <Flex className="loginForm" centered>
      <Flex gap='1rem' style={{ width: '500px' }} flexDirection='column'>
        <InputField label="Username" />
        <InputField label="Password" type='password' />
        <Flex justifyContent='center'>
          <Button name="Login" />
        </Flex>
      </Flex>
    </Flex>
  )
}