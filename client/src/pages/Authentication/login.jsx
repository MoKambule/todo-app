
import { Link } from 'react-router-dom';
import styles from './loging.module.css';
import React, { useState } from 'react';
import { VscAccount } from "react-icons/vsc";


function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        console.log('Logging in with:', username, password);
    };


    return(
        <div className={styles.login_card}>
            <div>
                 <div className={styles.icon_container}>
                <VscAccount className={styles.icon_large} />
            </div>

                <h4>Login</h4>
                <div className={styles.input_wrapper}>
                    <input placeholder="username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                 <div className={styles.input_wrapper}>
                    <input placeholder="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className={styles.input_info}>
                    New User? <Link to="/register">Register</Link>
                </div>
                
                <button disabled={!username || !password} onClick={handleSubmit}>Login</button>
            </div>
        </div>
    )
}

export default Login