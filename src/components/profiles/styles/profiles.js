import styled from 'styled-components'

// Container, Title, List, Item, Picture, Name

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 30px;
  height: 70vh;

  @media (min-width: 1500px) {
    min-height: 70vh;
  }
`;

export const Title = styled.h1`
  width: 100%;
  color: white;
  font-size: 30px;
  text-align: center;
  font-weight: 500;

  @media (min-width: 800px) {
    font-size: 3.5vw;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`;

export const Picture = styled.img`
  height: auto;
  border: 1px solid black;
  border-radius: 5%;
  cursor: pointer;
`;

export const Name = styled.p`
  font-size: 12px;
  color: #808080;
  text-overflow: ellipsis;

  &:hover {
    color: #e5e5e5;
  }

  @media (min-width: 900px) {
    font-size: 1.3vw;
  }
`;

export const Item = styled.li`
  text-align: center;
  list-style-type: none;
  width: 10vw;
  max-widtht: 250px;
  min-width: 96px;
  cursor: pointer;

  &:hover > ${Picture} {
    border: 1px solid white;
  }

  &:hover > ${Name} {
    color: #e5e5e5;
  }
`;