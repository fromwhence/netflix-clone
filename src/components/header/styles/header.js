import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.section`
  display: flex;
  flex-direction: column;
  background-image: url(${({ src }) => (src ? `../images/misc/${src}` : '../images/misc/home-bg-2.jpg')});
  background-repeat: no-repeat;
  background-position: top left;
  background-size: cover;
  
  // @media (max-width: 550px) {
  //   ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  // }
`

export const NavShadow = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 55%, rgba(0,0,0,0.02) 100%);
  z-index: 3;
`;

export const BottomShadow = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(20,20,20,0.5) 50%, rgba(20,20,20,0.9) 100%);
  z-index: 3;
`;

export const Overlay = styled.div`
  background: linear-gradient(180deg, rgba(0,0,0,0.8 ) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0.8) 100%);
  z-index: 3;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
  padding: 25px 0 0;

  a {
    display: flex;
  }

  @media (min-width: 1000px) {
    margin: 0 56px;
  }
`;

export const Link  = styled.span`
  display: inline-block;
  z-index: 5;
  color: #e5e5e5;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin: 7px 20px 7px 0;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  
  &:hover {
    color: white;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background: #e50914;
  font-size: 16px;
  text-decoration: none;
  color: white;
  padding: 7px 17px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  @media (max-width: 550px) {
    font-size: 14.4px;
    padding: 4px 8px;
  }

`;

export const Logo = styled.img`
  z-index: 5;
  width: 90px;
  height: 27px; 
  margin-right: 50px;

  @media (min-width: 550px) {
    width: 110px;
    height: 30px;
  }

  @media (min-width: 1000px) {
    width: 135px;
    height: 40px;
  }

  @media (min-width: 1500px) {
    width: 170px;
    height: 50px;
  }
`;

export const BrowseLogo = styled.img`
  z-index: 5;
  width: 96px;
  height: 30px; 
  margin-right: 50px;
`;

export const Group = styled.div`
  z-index: 4;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 14px;
  color: white;
  line-height: normal;
  text-shadow: 2px 2px 4px rbga(0, 0, 0, 0.75);
  
  @media (min-width: 1100px) {
    font-size: 1.2vw;
  }
`;

export const Feature = styled(Container)`
  display: flex;
  padding-top: 3%;
  padding-bottom: 10%;
  flex-direction: column;
  align-items: normal;
  width: 45%;
  max-height: 680px;
  margin: 0 30px;

  @media (min-width: 550px) {
    width: 35%;
  }

 @media (min-width: 1000px) {
    width: 30%;
    margin: 0 56px;
  }
`;

export const FeatureTitle = styled.img`
  width: 100px;
  height: auto;

  @media (min-width: 550px) {
    width: 13vw;
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 18px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;

  @media (min-width: 950px) {
    font-size: 3.2vw;
  }
`;

export const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  font-size: 14px;
  box-shaow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: rgba(255, 255, 255, 1);
  color: black;
  border-width: 0;
  border-radius: 4px;
  max-width: 90px;
  min-width: 50px;
  padding: 0.6em 0;
  font-weight: 700;
  margin-top: 15px;
  cursor: pointer;
  transition: background-color: 0.3s ease;

  img {
    width: 14px;
    margin-right: 0.5em;
  }

  &:hover, &:focus {
    background-color: rgba(255, 255, 255, 0.7);
  }

  @media (min-width: 550px) {
    font-size: 16px;
    max-width: 105px;

    img {
      width: 16px;
    }
  }

  @media (min-width: 1000px) {
    font-size: 18px;
    max-width: 125px;
    padding: 0.75em 0;

    img {
      width: 18px;
    }
  }
`;

export const Search = styled.div`
  display: none;

  @media (min-width: 700px) {
    diplay: inline-block;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SearchIcon = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 3px;
  
  img {
    filter: brightness(1) invert(1);
    width: 20px;
  }
`;

export const SearchInput = styled.input`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border: 1px solid white;
  height: 30px;
  font-size: 14px;
  transition: width 0.4s;
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '250px' : '0')};
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  border: 1px solid #333;
  padding: 15px;
  width: 165px;
  height: auto;
  top: 33px;
  right: 0;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }

  ${Group} {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    ${Link}, ${Picture} {
      cursor: default;
    }
  }

  button {
    margin-right: 10px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }

  ${Link}:hover {
    text-decoration: underline;
  }


`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;


