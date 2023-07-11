import React from 'react'
import styled from "styled-components"

function Header() {
  return (
    <Title>
       <a>

          <span>Angie DUHARD</span>
        </a></Title>
  )
}

export default Header

const Title = styled.div`
margin: 2em auto;


a{
  padding: 0 12px;
  cursor: pointer;

  span{
    font-size: 3em;
    letter-spacing: 12px;
    position: relative;

    &:after {
      content: "";
      height: 2px;
      background: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform-origin: left center;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45,  0.94) 0s;
      transform: scaleX(0);

    }


  }

  &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
  }
`
