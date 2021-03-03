import React from 'react';
import { HeaderContainer } from '../containers/header';
import { Feature, OptForm } from '../components';
import { JumbotronContainer } from '../containers/jumbotron';
import { FaqsContainer } from '../containers/faq';
import { FooterContainer } from '../containers/footer';


export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.Subtitle>Watch anywhere. Cancel anytime.</Feature.Subtitle>
          <OptForm>
            <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.
            </OptForm.Text>
            <OptForm.Frame>
              <OptForm.Input placeholder="Email address" />
              <OptForm.Button>Try 30 Days Free</OptForm.Button>
            </OptForm.Frame>
          </OptForm>
        </Feature>
        
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}