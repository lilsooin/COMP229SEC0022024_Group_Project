import React, { useState } from "react";
import PropTypes from "prop-types";
import { create } from "./api-user";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function Signup() {
   const navigate = useNavigate(); // Define navigate using the hook

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [open, setOpen] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };


  const clickSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined
    };

    create(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
        setResponseMessage(`Error: ${data.error}`);
      } else {
        setOpen(true);
        setResponseMessage("Account created successfully!");
        // Redirect to signin after successful account creation
        
        setTimeout(() => navigate("/signin"), 500); // Delay for user to see message
      }
    });
  };

  const styles = {
    body: {
      fontFamily: "Arial",
      backgroundColor: "#a9b7ce",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      margin: "0"
    },
    container: {
      backgroundColor: "#ffffff",
      padding: "30px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px"
    },
    heading: {
      textAlign: "center",
      fontSize: "24px",
      color: "#333",
      marginBottom: "20px"
    },
    form: {
      display: "flex",
      flexDirection: "column"
    },
    input: {
      fontSize: "16px",
      padding: "10px",
      marginBottom: "20px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      outline: "none",
      transition: "border-color 0.3s"
    },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "12px",
      border: "none",
      borderRadius: "5px",
      fontSize: "16px",
      cursor: "pointer",
      transition: "background-color 0.3s"
    },
    responseMessage: {
      textAlign: "center",
      color: "#333",
      marginTop: "20px"
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Create Account</h2>
        <form style={styles.form} onSubmit={clickSubmit}>
          <p>Username:</p>
          <input
            type="text"
            id="username"
            name="username"
            value={values.name}
            onChange={handleChange("username")}
            style={styles.input}
            required
          />

          <p>Email:</p>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange("email")}
            style={styles.input}
            required
          />

          <p>Password:</p>
          <input
            type="password"
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange("password")}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>
            Make the Account
          </button>
        </form>
        {responseMessage && (
          <p style={styles.responseMessage}>{responseMessage}</p>
        )}
      </div>
    </div>
  );
}