import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { googleLogout, TokenResponse, useGoogleLogin } from '@react-oauth/google';
import { Flex } from '../../../ui-library/flex';
import { Button } from '../../../ui-library/button';

interface Profile {
  picture: any;
  name: string;
  email: string;
}

export const LoginWithGoogle = () => {
  const [user, setUser] = useState<Omit<TokenResponse, "error" | "error_description" | "error_uri">>();
  const [profile, setProfile] = useState<Profile | null>(null);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
    () => {
      if (user) {
        axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
          headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
          }
        })
          .then((response: { data: Profile }) => {
            setProfile(response.data);
          })
          .catch((error: {}) => console.log(error));
      }
    },
    [user]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };

  return (
    <Flex>
      {profile ? (
        <div>
          <img src={profile.picture} alt="user image" />
          <h3>User Logged in</h3>
          <p>Name: {profile.name}</p>
          <p>Email Address: {profile.email}</p>
          <br />
          <br />
          <button onClick={logOut}>Log out</button>
        </div>
      ) : (
        <Button onClick={() => login()} name="Sign in with Google" />
      )}
    </Flex>
  );
}