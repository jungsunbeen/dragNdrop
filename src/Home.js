import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
    <Header>마이페이지</Header>
    <body>
        <Bingos>
            <Bingo></Bingo>
        </Bingos>
        <Infos></Infos>
    </body>
    </>
  )
}

export default Home

const Header = styled.div`
  width : 100%;
`
const Bingos = styled.div`
  display : grid;
`