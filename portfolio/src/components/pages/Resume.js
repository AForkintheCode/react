import React from 'react';
import '../../styles/Resume.css';

const styles = {
  Title: {
    fontWeight: 'bold'
  },
  Front: {
    color: 'red',
    fontWeight: 'bold'
  },
  Back: {
    color: 'blue',
    fontWeight: 'bold'
  }
}

export default function Resume() {
  return (
    <div>
      <h1 style={styles.Title}>Resume</h1>      
        <ul>
          <li><h2 style={styles.Front}>Front-End: </h2></li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
        <ul>          
          <li><h2 style={styles.Back}>Back-End: </h2></li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Express</li>
        </ul>
    </div>
  );
}
