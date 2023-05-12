import React from 'react';
import github from './images/github.png'

const styles = {
   Footer:{
       fontSize: '20px',
       fontFamily: 'Courier',
       backgroundColor: '#70abaf',       
       textAlign: 'center',
       height: '20vh'
   },
   Logo:{      
      border: 'solid',
      borderRadius: '10px',
      borderColor: 'black',
      margin: '10px',
      backgroundColor: 'white'
   }
}


export default function Footer() {
   return (
      <div style = {styles.Footer}>
         <a href="https://github.com/AForkintheCode"><img src={github} style={styles.Logo}></img></a>
      </div>
   );
}