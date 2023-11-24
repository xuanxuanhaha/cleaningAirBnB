import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login.module.css';
// import ANUlogo from './../../assets/ANUlogo.jpg';
import cleaning_logo from './../../assets/cleaning_logo.png'

import emailicon from './../../assets/login/email_icon.png';
import lockericon from './../../assets/login/locker_icon.png';
import { loginSuccess, logout } from './../actions/authActions';
import { useSelector, useDispatch, connect } from 'react-redux';
import Navbar from './../Navbar/Navbar'

const ProtectedPage = () => {
    return <h1>Protected Page</h1>;
  };

const Login = (props) => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [inputHasError, setInputHasError] = useState(false);
    const [timeTooEarly, setTimeTooEarly] = useState(false);
  
    const goToSignUp = () => {
        navigate('/signup');
    };
  
    const goToLogIn = () => {
        navigate('/login');
    };
  
    const ValidJudge = () => {
      if (username && password) {
        setInputHasError(false);
      } else {
        setInputHasError(true);
      }
    };
  
    const submitLogIn = async () => {
      await ValidJudge();
      if(!inputHasError) {
        try {      
            const response = await axios.get(`/api/users?email=${username}&password=${password}`);
            if (response.data.error) {
                setInputHasError(true);

            } else {
                dispatch(loginSuccess());
                localStorage.setItem('isAuthenticated', 'true');
                navigate('/dashboard');
                const userData = { username: username, userid: response.data.user.id, language: response.data.user.language };

                props.loginSuccess(userData);

            }

          } catch (error) {
            console.error(error);
            setInputHasError(true);

          }
      }      
    };
  
    const goToForgetPassword = () => {
      console.log('goToForgetPassword');
      navigate('/forgetpassword');
      
    };
  
    return (
      <Navbar />
    );
  };
  
  export default connect(null, {loginSuccess})(Login);