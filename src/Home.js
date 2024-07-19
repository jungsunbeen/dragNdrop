import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
    <Header>마이페이지</Header>
    <Body>
        <Bingos>
            <Bingo></Bingo>
            <Bingo></Bingo>
            <Bingo></Bingo>
            <Bingo></Bingo>
            <Bingo></Bingo>
            <Bingo></Bingo>
            <Bingo></Bingo>
            <Bingo></Bingo>
            <Bingo></Bingo>
        </Bingos>
        <Info>
          <div>hello</div>
        </Info>
    </Body>
    </>
  )
}

export default Home

const Header = styled.div`
  width : 100%;
  height : 7vh;
  border-bottom: 1.5px solid #d9d9d9;
`

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-items: center;
  height: 90vh;
  // width: 120vh;
  margin: 0;
`
const Bingos = styled.div`
  display : grid;
  grid-template-columns: repeat(3, 150px);
  grid-template-rows: repeat(3, 150px);
  gap : 5px;
`

const Bingo = styled.div`
  display : flex;
  width : 150px;
  height : 150px;
  background-color : #d9d9d9;
`

const Info = styled.div`
  height: 75vh;
  width: 50vh;
  border: 1.5px solid #d9d9d9;
  color : black;
  border-radius: 15px;
`