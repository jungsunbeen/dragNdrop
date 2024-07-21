import React, { useState } from 'react';
import styled from 'styled-components';

const Home = () => {
  const [bingos, setBingos] = useState(Array.from({ length: 9 }, (_, index) => index));
  const [draggingIndex, setDraggingIndex] = useState(null);
  const [draggingInfo, setDraggingInfo] = useState(null);
  const infoItems = ['여행 가기', '아이엘츠', '개발공부']; // Add more items as needed

  const handleDragStart = (index, type) => {
    if (type === 'bingo') {
      setDraggingIndex(index);
      setDraggingInfo(null);
    } else {
      setDraggingInfo(infoItems[index]);
      setDraggingIndex(null);
    }
  };

  const handleDrop = (index) => {
    const newBingos = [...bingos];
    if (draggingInfo !== null) {
      newBingos[index] = draggingInfo;
      setDraggingInfo(null);
    } else {
      const [draggedItem] = newBingos.splice(draggingIndex, 1);
      newBingos.splice(index, 0, draggedItem);
      setDraggingIndex(null);
    }
    setBingos(newBingos);
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
              onDragStart={() => handleDragStart(index, 'bingo')}
              onDrop={() => handleDrop(index)}
              onDragOver={handleDragOver}
            >
              {typeof bingo === 'number' ? bingo + 1 : bingo}
            </Bingo>
          ))}
        </Bingos>
        <Info>
          {infoItems.map((item, index) => (
            <InfoItem
              key={index}
              draggable
              onDragStart={() => handleDragStart(index, 'info')}
            >
              {item}
            </InfoItem>
          ))}
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
  font-size : 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 8px;
  background-color: #f0f0f0;
  border: 2px solid #d9d9d9;
`;

const Info = styled.div`
  height: 75vh;
  width: 50vh;
  border: 1.5px solid #d9d9d9;
  color: black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding : 5px;
  height: 20px;
  width : 80px;
  border-radius: 15px;
  background-color: #f0f0f0;
  border: 1px solid #d9d9d9;
  margin-bottom: 10px;
  cursor: grab;
`;
