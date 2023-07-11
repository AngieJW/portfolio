import React from 'react'
import styled from "styled-components"

function Card() {
  return (
    <Wrap>
      <Cover></Cover>

    </Wrap>
  )
}

export default Card

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  background: orange;
`
const Cover = styled.div`
  background-image: url('/images/openair.jpg');
`
