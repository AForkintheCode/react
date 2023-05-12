import React from 'react';
import Form from '../Form'
import '../../styles/Contact.css';

const styles = {
  Title: {
    fontWeight: 'bold'
  }
}

export default function Contact() {
  return (
    <div>
      <h1 style={styles.Title}>Contact Me</h1>
      <div className = "col-10">< Form/></div>
    </div>
  );
}

