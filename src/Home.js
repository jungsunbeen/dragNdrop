import React, { useState } from 'react';
import styled from 'styled-components';

const Home = () => {
  const [bingos, setBingos] = useState(Array.from({ length: 9 }, (_, index) => index));
  const [draggingIndex, setDraggingIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggingIndex(index);
  };

  const handleDrop = (index) => {
    const newBingos = [...bingos];
    const [draggedItem] = newBingos.splice(draggingIndex, 1);
    newBingos.splice(index, 0, draggedItem);
    setBingos(newBingos);
    setDraggingIndex(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Header>logo</Header>
      <Body>
        <Bingos>
          {bingos.map((bingo, index) => (
            <Bingo
              key={index}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDrop={() => handleDrop(index)}
              onDragOver={handleDragOver}
            >
              {bingo + 1}
            </Bingo>
          ))}
        </Bingos>
        <Info>
          <div>hello</div>
        </Info>
      </Body>
    </>
  );
};

export default Home;

const Header = styled.div`
  width: 100%;
  height: 7vh;
  border-bottom: 1.5px solid #d9d9d9;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 90vh;
  margin: 0;
`;

const Bingos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(3, 150px);
  gap: 5px;
`;

const Bingo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background-color: #d9d9d9;
  border: 1px solid #000;
`;

const Info = styled.div`
  height: 75vh;
  width: 50vh;
  border: 1.5px solid #d9d9d9;
  color: black;
  border-radius: 15px;
`;