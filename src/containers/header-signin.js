import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function HeaderContainerSignin({ children }) {
  return (
    <Header bg={true}>
      <Header.Overlay>
      <Header.Frame>
        <Header.Logo 
          to={ROUTES.HOME} 
          src="../images/misc/logo.svg"
          alt="Netflix" 
          />
      </Header.Frame>
        {children}
      </Header.Overlay>
    </Header>
  )
}