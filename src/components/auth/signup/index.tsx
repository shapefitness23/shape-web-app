import { useNavigate } from 'react-router-dom';
import { Button } from '../../../ui-library/button';
import { Flex } from '../../../ui-library/flex';
import { InputField } from '../../../ui-library/input';
import { Label, Link2 } from '../../../ui-library/typography';
import './signup.css';

export const SignUp = () => {
  const navigate = useNavigate()
    ; return (
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
            <Flex gap='0.5rem' centered>
              <Label>
                Already have an account?
              </Label>
              <Link2 onClick={() => navigate('/login')}>Login</Link2>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    )
}