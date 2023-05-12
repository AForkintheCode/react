import React from 'react';
import '../../styles/Portfolio.css';
import Project from '../Project'

import pet from '../images/boop.jpeg'
import weather from '../images/weather.png'
import blog from '../images/blog.JPG'
import yelp from '../images/yelp.png'
import notepad from '../images/notepad.png'

const styles = {
  Exhibit: {
    display: 'inline',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '10px',
    justifyContent: 'center'
  },
  Row: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '10px',
    marginTop: '0px'
  },
  Page: {
    backgroundColor: '#70abaf'
  },
  Link: {
    color: 'black',
    textDecoration: 'none',
    justifyContent: 'center',
    textAlign: 'center'
  }, 
}

export default function Portfolio() {
  return (
    <div style={styles.Exhibit}>
      <div className="row" style={styles.Row}>
        <div className="col">
          <a href="https://aforkinthecode.github.io/pet/" style={styles.Link}>                                 
            <Project img = {pet} name="Pet Finder" 
            description="Find the pet for you"/>
          </a>
        </div>
          <div className="col">
          <a href="https://aforkinthecode.github.io/weatherforecast/" style={styles.Link}>
            <Project img = {weather} name="Weather Forecast" 
            description="5 Day Weather Forecast"/>
          </a>
        </div>
      </div>
      <div className="row" style={styles.Row}>
        <div className="col">
          <a href="https://aforkinthecode.github.io/blog/" style={styles.Link}>
            <Project img = {blog} name="Blog" 
            description="A tech blog to keep you updated on daily happenings"/>
          </a>
          </div>
          <div className="col">
          <a href="http://spooky-dudes.herokuapp.com/" style={styles.Link}>
            <Project img = {yelp} name="A Bad Yelp Review" 
            description="Choose your own adventure"/>
          </a>
        </div>
      </div>
      <div className="row" style={styles.Row}>
        <div className="col">
          <a href="https://github.com/AForkintheCode/readme" style={styles.Link}>
            <Project img = {notepad} name="Readme Generator" 
            description="Generate a Readme for your next project"/>
          </a>
          </div> 
          <div className="col">
          <a href="https://notepadapp123.herokuapp.com/" style={styles.Link}>
            <Project img= {notepad} name="A Notepad App"
              description="A simple text editor"/>
          </a>
        </div>
      </div>
    </div>
  ) 
};