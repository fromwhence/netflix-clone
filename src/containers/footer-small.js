import React from 'react';
import { Footer } from '../components';

export function FooterContainerSmall() {
  return (
    <Footer>
      <Footer.Break />
      <Footer.Title>Questions? Call  1-844-505-2993</Footer.Title>
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQs</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Help Center</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Terms of Use</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Privacy</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      {/* <Footer.Select>
        <option 
          selected value="/" 
          data-language="en" 
          data-country="US">
            English
        </option>
        <option 
          value="/us-es/" 
          data-language="es" 
          data-country="US">
            Español
        </option>
      </Footer.Select> */}
    </Footer>
  )
}
