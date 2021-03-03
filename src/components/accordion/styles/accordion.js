import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  margin: auto;
  width: 100%;
  border-bottom: 8px solid #222;
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 40px;
  max-width: 855px;
  padding: 0 20px;
  margin: auto;

  @media (max-width: 550px) {
    padding: 0px;
  }
`;

export const Inner = styled.div`
  padding: 70px 0px;
  width: 100%;
`;

export const Item = styled.div`
  color: white;
  padding: 0;
  margin-bottom: 10px;
  width: 100%;

  &:first-of-type {
    margin-top: 3em;
  }

  @media (min-width: 950px) {
    &:last-of-type {
      margin-bottom: 40px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  padding: 0 10px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  font-weight: normal;
  color: white;
  background: #303030;
  margin-bottom: 1px;
  padding: 0.8em 1.2em;
  cursor: pointer;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }

`;

export const Body = styled.div`
  color: white;
  background: #303030;
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  padding: 1.2em;
  user-select: none;
  transition: max-height 0.3s cubic-bezier(0.5, 0, 0.1, 1);

  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 22px;
  }
`;