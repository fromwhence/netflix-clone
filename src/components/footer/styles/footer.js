import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 1000px;
  flex-direction: column;
  padding: 25px 56px;
  margin: auto;

  @media (max-width: 1000px) {
    padding: 25px 40px;
  }
`;

export const Break = styled.div`
  width: 100%;
  height: 30px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr))
  }

`;

export const Link = styled.a`
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
`;

export const Select = styled.select`
  font-family: inherit;
  color: #757575;
  font-size: 16px;
  width: 140px;
  background: black;
  margin-top: 15px;
  margin-bottom: 40px;
  padding: 12px 26px 12px 26px;
`;

export const Option = styled.option`

`;

