import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  background: black;
  width: 100%;
  margin: 30px auto 0;
  padding: 20px 25px 90px;

  @media (min-width: 530px) {
    padding: 20px 35px 90px;
  }
  
  @media (min-width: 720px) {
    min-height: 600px;
    max-width: 450px;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    padding: 68px 68px 0px;
    margin-bottom: 90px;
  }
`;

export const Error = styled.div`
  background: #e87c03;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 1Ams 6px;
  padding: 10px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 30px;
`;

export const Text = styled.h2`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
  margin-top: 30px;
`;

export const TextSmall = styled.p`
  color: #8c8c8c;
  font-size: 13px;
  line-height: normal;
  margin-top: 10px;
`;

export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: white;
  height: 50px;
  padding: 5px 20px;
  margin-bottom: 16px;

  &:last-of-type {
    margin-bottom: 30px;
  }

`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  border: 0;
  height: 50px;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    opacity: 0.8;
  }

`;



