import { Button } from '../../../ui-library/button';
import { Flex } from '../../../ui-library/flex';
import { InputField } from '../../../ui-library/input';
import './signup.css';

export const SignUp = () => {
  return (
    <Flex alignItemsCenter className="loginFormContianer" >
      <Flex className="signup" centered flexDirection='column'>
        <Flex style={{ width: '480px' }} flexDirection='column' gap='1.5rem'>
          <InputField label="Name" />
          <InputField label="Email" type='email' />
          <InputField label="Phone Number" type='number' maxLength={10} />
          <InputField label="Password" type='password' />
          <InputField label="Confirm password" type='password' />
          <Flex justifyContent='center'>
            <Button name="Sign up" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}