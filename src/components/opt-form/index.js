import React from 'react';
import { Container, Text, Frame, Input, Button } from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

OptForm.Frame = function OptFormFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} 
      <img src="/images/icons/chevron-right.png" alt="Try now" />
    </Button>
  )
}



