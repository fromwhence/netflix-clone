import styled from 'styled-components';

export const Container = styled.div`
  max-width: 950px;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 90px 0 80px;
  margin: 0 auto;

  @media (min-width: 550px) {
    padding: 125px 0 150px;
  }

  @media (min-width: 1500px) {
    padding: 160px 0 180px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  color: white;
  padding: 0 20px;
  margin: 0;
  
  @media (min-width: 550px) {
    font-size: 50px;
    padding: 0 60px;
  }

  @media (min-width: 950px) {
    padding: 0 175px;
  }

  @media (min-width: 1500px) {
    font-size: 64px;
    padding: 0 150px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: white;
  margin: 16px 0 0;

  @media (min-width: 550px) {
    font-size: 26px;
    margin: 16px 0 0;
  }
  
`;