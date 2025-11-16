import React from "react";
import { Link } from "react-router-dom"; 
import Navbar from "../../components/Navigation";
import styles from './Landing.module.css';
import landing from '../../assets/landingpage.png';
function Landing(){
    return(
        <>
        <Navbar/>
        <div className={styles.landing_wrapper}>
                <div className={styles.landing_text}>
                    <h1>
                        Schedule your daily tasks with 
                        <span className={styles.primarytext}> mini mo-learn</span>
                    </h1>
                    <div className={styles.btnWrapper}>
                        <Link to="/register" className={styles.primaryBtn}>Register</Link>
                        <Link to="/login" className={styles.secondaryBtn}>Login</Link>
                        <Link to="/todo" className={styles.primaryBtn}>Open Todo App</Link>
                    </div>
                </div>
                <div className={styles.landing_img}>
                    <img src={landing} alt="Landing" />
                </div>
            </div>
        </>
    )
}
 
export default Landing