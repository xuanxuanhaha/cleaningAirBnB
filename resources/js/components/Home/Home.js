import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css'; // Assuming the CSS file is named home.module.css
// import ANUlogo from './../../assets/ANUlogo.jpg';
import cleaning_home_img from './../../assets/cleaning_home_img.png'

import ReactDOM from "react-dom";
import Navbar from '../Navbar/Navbar';

function Home() {
    const navigate = useNavigate();


    const goToContact = () => {
        navigate('/login');
    };


    return (
        <div className={styles.background}>
            <Navbar />
            <div className={styles.home_img}>
                <img src={cleaning_home_img} alt="Cleaning Home" />
                <div className={styles.textoverlay}>
                    <div className={styles.title}>
                        Discover Unparalleled Airbnb Cleaning Excellence
                    </div>
                    <div className={styles.subtitle}>
                        Cleanliness You Can Trust
                    </div>
                    <div className={styles.content}>
                        Rest assured, your property is in the hands of professionals. 
                        Our dedicated team is committed to immaculate cleaning and maintaining the sparkle 
                        of your Airbnb. We pride ourselves on our thoroughness and promise timely updates 
                        and responses to all your cleaning needs. Trust us to keep your space pristine and 
                        welcoming for every guest.
                    </div>
                    <div className={styles.contact_btn_box}>
                        <button className={styles.contact_btn} onClick={goToContact}>
                            Contact Now
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Home;
