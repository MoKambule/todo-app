
import styles from './loging.module.css';
import React, { useState } from 'react';


function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className={styles.login_card}>
            <div>
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
            </div>
        </div>
    )
}

export default Login