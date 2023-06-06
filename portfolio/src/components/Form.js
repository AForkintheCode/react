import React, { useState } from 'react';  
import { validateEmail } from '../utils/helpers';

function Form() {
//useState variables
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
   
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType ==='firstName' || inputType==='lastName') {
      return inputType === 'firstName' ? setFirstName(inputValue) : setLastName(inputValue);
    }
    else if (inputType === 'email'){
      setEmail(inputValue)
    } else if (inputType === 'comment'){
      setComment(inputValue)
    }
  };

  
  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    if(firstName.length === 0 || lastName.length === 0) {
      setErrorMessage('Required field missing!')
      alert(errorMessage)
      return;
    } else if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      alert(errorMessage)
      return;
    }

    //greet user, clear on submit
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');
    setEmail('');
    setComment('');
  };

  return (
    <div>
      <form className="form">
        <div className ="row">
        <p>First Name:<input
          value={firstName}
          name="firstName"
          onChange={handleInputChange}
          type="text"
          placeholder="First Name"
        />
          Last Name:<input
          value={lastName}
          name="lastName"
          onChange={handleInputChange}
          type="text"
          placeholder="Last Name"
        />
        </p>
        </div>
        <div className = "row">
        <p>
        Email:<input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Email"
        />       
        </p>
        </div>
        <div className = "row">
        <p>
        Comments:<input
          value={comment}
          name="comment"
          onChange={handleInputChange}
          type="text"
          placeholder="Comment"
          size="60"
        />        
        </p>
        </div>
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
