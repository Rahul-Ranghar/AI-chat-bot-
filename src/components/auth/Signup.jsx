import React, { useState } from 'react';
import './auth.css'; // Import CSS for styling
import { Link, useNavigate } from 'react-router-dom';
import {db, userCollectionRef} from '../../config/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';


const SignUp = () => {
  const Navigate = useNavigate();
  // State variables to store form input values
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    let docs = await getDoc(doc(db, "users", username));
    if(docs.exists()) {
        toast.error("username already exists");
        return;
    }
    await setDoc(doc(db, "users", username), {
        username,
        name,
        email,
        password
    });
    toast.success("Sucessfully Registered");
    Navigate('/login');
  };

  return (
    <>
    <div className="signup-container">
      <h2 style={{textAlign: 'center', marginBottom: "10px", }}>Welcome to Ai chatbot <br></br>Please Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign Up</button>
        <Link to={'/login'}><p style={{fontSize: '14px', color: "blue", marginTop: "10px", cursor: "pointer"}}>Already have an Account? Login here</p></Link>
      </form>
    </div>
    </>
  );
};

export default SignUp;
