import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;

  @media (max-width: 950px) {
    flex-direction: column;
    align-items: center;
}
`;

export const Text = styled.p`
  color: white;
  font-size: 19px;
  text-align: center;
  padding: 0 45px;
  margin-bottom: 25px;

  @media (max-width: 600px) {
    margin-bottom: 15px;
    font-size: 16px;
    line-height: 22px;
    padding: 0 25px;
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 500px;
  height: 50px;
  border: 0;
  padding: 10px;
  font-size: 15px;
  font-family: inherit;
  margin: 0;
  
  @media (min-width: 600px) {
    max-width: 450px;
    height: 60px;
    font-size: 16px;
  }
  
  @media (min-width: 1500px) {
    max-width: 500px;
    height: 70px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  height: 60px;
  max-width: 315px;
  width: 100%;
  background: #e50914;
  border: 2px solid #222;
  color: white;
  text-transform: uppercase;
  padding: 0 15px 0 20px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  margin: 0;

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
  }

  &:hover {
    background: #f40612;
  }
    
  @media (max-width: 950px) {
    height: 40px;
    max-width: 190px;
    font-size: 16px;
    margin-top: 15px;
    padding: 0 16px;

    img {
      width: 14px;
    }
  }

  @media (min-width: 1500px) {
    height: 70px;
  }

}

`;

