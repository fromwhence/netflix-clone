import styled from 'styled-components'

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0; 
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  margin: 0 20px;
  z-index: 100;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;
  z-index: 101;

  video {
    height: 100%;
    width: 100%;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 25px;
  width: 22px;
  height: 22px;
  opacity: 0.7;
  background-color: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: ' ';
    height: 22px;
    width: 2px;
    background-color: white;
  }

  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: rgba(229, 9, 20, 0.9);
  color: white;
  border: 0;
  border-radius: 4px;
  max-width: 90px;
  min-width: 50px;
  padding: 0.6em 1.2em;
  margin-top: 0.5em;
  font-weight: 700;
  cursor: pointer;
  transition: background-color: 0.3s ease;

  img {
    filter: brightness(1) invert(1);
    width: 12px;
    margin-right: 7px;
  }

  &:hover {
    background-color: rgba(229, 9, 20, 1)
  }

  @media (min-width: 1000px) {
    font-size: 18px;
    max-width: 125px;
    padding: 0.6em 1.3em;

    img {
      width: 16px;
    }
  }
`;
