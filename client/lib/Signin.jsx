import React, { useState } from 'react';
import auth from './auth-helper.js';
import { Navigate } from 'react-router-dom';
import { signin } from './api-auth.js';

export default function Signin() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    redirectToReferrer: false
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const clickSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const user = {
      email: values.email || undefined,
      password: values.password || undefined
    };
    console.log(user);
    signin(user).then((data) => {
      if (data.error) {
        console.log("error >>>");
        setResponseMessage(data.error); // Show error response message
      } else {
        console.log("else >>>");
        console.log(data);
        auth.authenticate(data, () => {
          setValues({ ...values, redirectToReferrer: true });
        });
      }
    });
  };

  const styles = {
    body: {
      fontFamily: 'Arial',
      backgroundColor: '#a9b7ce',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      margin: '0'
    },
    container: {
      backgroundColor: '#ffffff',
      padding: '30px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '400px'
    },
    heading: {
      textAlign: 'center',
      fontSize: '24px',
      color: '#333',
      marginBottom: '20px'
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    input: {
      fontSize: '16px',
      padding: '10px',
      marginBottom: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      outline: 'none',
      transition: 'border-color 0.3s'
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '12px',
      border: 'none',
      borderRadius: '5px',
      fontSize: '16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s'
    },
    responseMessage: {
      textAlign: 'center',
      color: '#333',
      marginTop: '20px'
    }
  };

  if (values.redirectToReferrer) {
    return <Navigate to="/" />;
  }

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Sign in</h2>
        <form style={styles.form} onSubmit={clickSubmit}>
          <p>Email:</p>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange('email')}
            style={styles.input}
            required
          />

          <p>Password:</p>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange('password')}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Sign in
          </button>
        </form>
        {responseMessage && (
          <p style={styles.responseMessage}>{responseMessage}</p>
        )}
      </div>
    </div>
  );
}