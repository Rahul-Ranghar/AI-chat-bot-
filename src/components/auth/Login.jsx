import React, { useContext, useState } from 'react';
import './auth.css'; // Import CSS for styling
import { Link, useNavigate } from 'react-router-dom';
import {db, userCollectionRef} from '../../config/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import { AppState } from '../../App';


const Login = () => {
  const Navigate = useNavigate();
  const useAppState = useContext(AppState);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    let docs = await getDoc(doc(db, "users", username));
    if(docs.exists()) {
        if(docs.data()['password'] == password) {
          toast.success("Login Sucessfull");
          useAppState.setUser(docs.data()['name']);
          useAppState.setLogin(true);
          Navigate('/chat');
        } else {
          toast.error("Invalid Credentials");
        }
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
     <>
    <div className="signup-container">
      <h2 style={{textAlign: 'center', marginBottom: "10px"}}>Welcome back to AI chatbot <br></br>Please login</h2>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <Link to={'/signup'}><p style={{fontSize: '14px', color: "blue", marginTop: "10px", cursor: "pointer"}}>Does not have an account? Signup here</p></Link>
      </form>
    </div>
    </>
  );
};

export default Login;
