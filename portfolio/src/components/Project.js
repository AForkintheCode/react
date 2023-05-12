import React from 'react';

const styles = {
  Container: {
    display: 'flex',
    justifyContent: 'center'
    
  },
  Title: {
    fontWeight: 'bold'
  },
  CardFormat: {
    display: 'block',
    position: 'relative',
    top: '40%'
  },
  Image:{
    height: '4.5rem',
    width: '5.5rem',
    objectFit: 'cover',
    position: 'absolute',
    top: '0',
    left: '40%',
    
  }
}

export default function Project(props) {
  const cardStyle = {
    display: 'flex',
    width: '20rem',
    height: '10rem',
    marginBottom: '10px',
    justifyContent: 'center',
  };

  return (
    <div className="container" style={styles.Container}>
      <div className="card" style={cardStyle}> 
      <img src={props.img} className="card-img-top" alt="..." style={styles.Image}></img>       
        <div className="card-body" style={styles.CardFormat}>
          <h5 className="card-title" style={styles.Title}>{props.name} </h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
}



