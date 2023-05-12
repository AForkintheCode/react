import React from 'react';
import '../../styles/About.css';

import img from '../images/placeholder.jpg'

const styles = {
  Title: {
    fontWeight: 'bold'
  },
  Profile: {
    marginLeft: 'auto',
    marginRight: 'auto',
    justifyContent: 'center'
  }
}

export default function About() {
  return (
    <div>
      <img src = {img} alt="placeholder" style={styles.Profile} ></img>
      <h1 style={styles.Title}>About Me</h1>
      <div className='row'>
        <div className='col-12'>
          <p>
            Sinclair Li is a native of San Diego, California. A web developer, he is interested in all things tech and is constantly working to hone his skills in the field. In his free time he enjoys playing sports, photography, collecting baseball cards, gardening, cooking, and travelling, among other things. He has travelled to fourteen different countries (so far) and plans on visiting more. He is an avid baseball fan and enjoys rooting on the San Diego Padres. He hopes to see them win the World Series one day.
          </p>
        </div>
      </div>
    </div>
  );
}
