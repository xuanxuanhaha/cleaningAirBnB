import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route, Routes, Navigate} from 'react-router-dom'
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';

import Home from './home/home';
import Signup from './Signup/Signup';
import Login from './Login/Login';
import ForgetPassword from './ForgetPassword/ForgetPassword'
import ResetPassword from './ResetPassword/ResetPassword'

import { useSelector, useDispatch } from 'react-redux';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';



const ProtectedPage = () => {
    return <h1>Protected Page</h1>;
  };

function Example() {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element = {<Home />}/>
                    <Route path="/signup" element = {<Signup />}/>
                    <Route path="/login" element = {<Login />}/>
                    <Route path="/forgetpassword" element = {<ForgetPassword />}/>
                    <Route path="/resetpassword" element={<ResetPassword />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Example />
            </PersistGate>

        </Provider>

    , document.getElementById('example'));
}
