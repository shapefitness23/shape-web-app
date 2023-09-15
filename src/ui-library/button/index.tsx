import React from 'react';
import { Button as AntButton } from 'antd';

export const Button = ({ name }: { name: string; }) => {
  return (
    <AntButton>{name}</AntButton>
  )
}