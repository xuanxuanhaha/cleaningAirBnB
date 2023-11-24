import React, { useEffect, useState } from 'react';
import styles from './navbar.module.css';
// import anulogo from './../../assets/ANUlogo.jpg';
import leaninglogo from './../../assets/cleaning_logo.png'

// import peopleicon from './../../assets/assessment/person.png';
import peopleicon from './../../assets/assessment/personicon.png';

import { useSelector } from 'react-redux';

const Navbar = () => {
  const [username, setUsername] = useState('');
  const userData = useSelector(state => state.auth.user);

  useEffect(() => {
    // Simulating the behavior of getUserInfo() from your Angular code
    const userInfo = { username: '' }; // Sample user info for testing
    setUsername(userInfo.username);
  }, []);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src={leaninglogo} className={styles.anu_logo} alt="ANU Logo" />
        <span className={styles.logotext}>Company Name</span>
      </div>
      <ul className={styles.navlinks}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
    </div>

  );
};

export default Navbar;
