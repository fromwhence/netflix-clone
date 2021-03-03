import styled from 'styled-components';

export const Title = styled.h2`
  line-height: 1.25vw;
  font-size: 14px;
  color: #e5e5e5;
  font-weight: 700;
  margin-left: 30px;
  margin-right: 30px;
  z-index: 95;

  @media (min-width: 1000px) {
    line-height: 1.25vw;
    font-size: 1.4vw;
    margin-left: 56px;
    margin-right: 56px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  &:last-of-type {
    margin-bottom: 10px;
  }

`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items: ${alignItems}`};
  width: 100%;
  height: auto;

  > ${Container}:first-of-type {
    margin-top: -160px;
  }

  > ${Container}:first-of-type {
    @media (min-width: 1000px) {
      margin-top: -195px;
    }
  }
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row; 
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  border: 0;
  height:  auto;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border-radius: 5px;
`; 

export const Meta = styled.div`
  display: none;
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 0;
  background-color: rgba(0,0,0,0.6);
  padding: 10px;
  border-radius: 0 0 5px 5px;
  box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.8);
  transition: all 0.4s;

  @media (max-width: 1000px) {
    bottom: -55%;
  }
`;

export const SubTitle = styled.h2`
  font-size: 12px;
  color: white;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: white;
  margin-bottom: 0;
  user-select: none;
  line-height: 1.2;
`;

export const Item = styled.div`
  z-index: 95;
  position: relative;
  display: flex;
  border-radius: 5px;
  background-color: #141414;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 2px;
  cursor: pointer;
  transition: transform 0.4s;
  box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.7);

  &:hover {
    transform: scale(1.4);
    z-index: 100;
  }

  @media (min-width: 1000px) {
    &:hover ${Meta} {
      display: block;
      z-index: 100;
    }
  }

  &:first-of-type {
    margin-left: 30px;
    
    @media (min-width: 1000px) {
        margin-left: 56px;
    }
}

&:last-of-type {
    margin-right: 30px;
    
    @media (min-width: 1000px) {
        margin-right: 56px;
    }
}
}
`;

export const FeatureText = styled.p`
  font-size: 12px;
  color: white;
  font-weight: ${({ fontWeight }) => (fontWeight === 'bold' ? 'bold' : 'normal')};
  margin-bottom: 10px;
  line-height: 1.4;

  @media (min-width: 1000px) {
    font-size: 16px;
    line-height: 1.5;
  }

`;

export const FeatureTitle = styled(Title)`
  margin: 0;
`;

export const Feature = styled.div`
  z-index: 99;
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: auto; 
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;

  ${Title} {
    font-size: 16px;
  }

  @media (min-width: 1000px) {
    height: 360px;
    background-size: contain;

    ${Title} {
      font-size: 1.6vw;
      line-height: 20px;
    }
  }
`;

export const FeatureClose = styled.button`
  z-index: 95;
  position: absolute;
  color: white;
  right: 20px;
  top: 20px;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: normal;
  margin-left: 30px;
  max-width: 50%;
  padding: 25px 0 30px;

  @media (min-width: 1000px) {
    margin-left: 56px;
    max-width: 500px;
  }
`;

export const Maturity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ rating }) => (rating >= 15 ?'red' : 'green')};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  font-size: 12px;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
`;