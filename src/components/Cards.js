import React from 'react'
import styled from "styled-components"

function Cards() {
  return (
    <Container>
      <Wrap>
        <img src="/images/openair.jpg" />
        <p>OpenAirConnect</p>
      </Wrap>
      <Wrap>
        <img src="/images/greendrive.jpg" />
        <p>GreenDrive</p>
      </Wrap>
      <Wrap>
        <img src="/images/gpt3.jpg" />
        <p>Clones</p>
      </Wrap>
    </Container>
  )
}

export default Cards

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 25px;
`

const Wrap = styled.div`
border-radius: 10px;
cursor: pointer;
background-color: #3e92cc;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 10px 20px -10px, rgb(0 0 0 / 40%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img{
  height: 300px;
  width: 100%;
  object-fit: contain;
  border-radius: 10px 10px 0 0;
}

&:hover {
  transform: scale(1.05);
  border-color: rgba(249, 249, 249, 0.8);
}
`
