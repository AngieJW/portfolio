import React from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
import "../styles/cards.css"

function Cards() {
  return (
    <Section className='cards__section'>
      <h2>Mes projets</h2>

        <Project>

            <Link to='https://www.openairconnect.com'>
            <img src="/images/openairco.png" alt="mobile view of openairconnect app"/></Link>

          <div>
            <h3>OPENAIRCONNECT</h3>
            <p> Application web : L'organisation facilitée de tes randos

            <ul>
                <li>Ruby on Rails</li>
                <li>Strava API</li>
                <li>OpenWeatherAPI</li>
                <li>Stimulus js</li>
                <li>WebSocket - Redis Cloud</li>
              </ul>
          <Link to='https://github.com/AngieJW/OPENAIRCONNECT'> Repo GitHub</Link></p></div>
        </Project>

        <Project>
          <div>
            <h3>NETFLIX CLONE</h3>
            <p> Application web : Collection de films avec bandes annonces

              <ul>
                <li>React.js</li>
                <li>Redux</li>
                <li>TMDB API</li>
                <li>Firebase</li>
              </ul>
          <Link to='https://github.com/AngieJW/netflix-clone'> Repo GitHub</Link></p></div>

            <Link to='https://netflix-clone-dbe46.web.app/'>
            <img src="/images/netflix-clone-hp.png" alt="desktop view of Netflix clone app"/></Link>

        </Project>


        <Project>
          <Link to='/clones'>
          <img src="/images/tesla.png"  alt="mobile view of tesla app"/> </Link>
          <div>
            <ul>Sites clonés avec React.js:</ul>
            <li>Page d'accueil GPT3</li>
            <li>Page d'accueil Tesla</li>
            <Link to='/clones'><h5>Voir les détails</h5></Link>
          </div>
        </Project>
          {/* <Link to='https://github.com/TerevaM/Green_Drive' ><p>Green Drive - Repo GitHub</p></Link> */}


        {/* <Wrap> <Link to='/clones'>
          <img src="/images/gpt.png" alt="mobile view of gpt3 app"/>
          <p>CLONES</p></Link>
        </Wrap> */}
    </Section>
  )
}

export default Cards

const Section = styled.div`

  h2{
    font-size: 2rem;
    border-bottom: 2px solid;
  }
`

const Project = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2em auto;
  width: 950px;

  @media(max-width: 1000px) {
    flex-direction: column;
    width: 600px;

    img{
      max-width: 350px;
    }

  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li{
    margin: 0.5em 0;
    list-style: none;
  }

  img{
    max-width: 600px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  }

  img:hover{
    transform: scale(1.05);
  }

`
