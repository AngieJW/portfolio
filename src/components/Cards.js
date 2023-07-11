import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'

function Cards() {
  return (
    <Container>
      <Wrap><Link to='https://www.openairconnect.com'>
        <img src="/images/openairco.png" />
        <p>OPENAIRCONNECT</p></Link>
      </Wrap>
      <Wrap>
        <img src="/images/tesla.png" />
        <p>GREEN DRIVE</p>
      </Wrap>
      <Wrap> <Link to='/clones'>
        <img src="/images/gpt.png" />
        <p>CLONES</p></Link>
      </Wrap>
    </Container>
  )
}

export default Cards

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0px 26px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, auto));
  grid-gap: 100px;
`

const Wrap = styled.div`

width: 400px;
cursor: pointer;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
a {
  text-decoration: none;
}
img{
  width: 400px;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

p{
  border-radius: 40px;
  height: 50px;
  background-color: #3e92cc;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 10px 20px -10px, rgb(0 0 0 / 40%) 0px 16px 10px -10px;
}

&:hover {
  transform: scale(1.05);
  border-color: rgba(249, 249, 249, 0.8);
}
`
