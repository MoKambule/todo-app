
import { Link, useNavigate } from 'react-router-dom';
import styles from './loging.module.css';
import React, { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import AuthServices from '../../services/authServices';
import { message } from 'antd';
import { getErrorMessage } from '../../util/GetError';
import Navbar from '../../components/Navigation';


function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit =  async () => {
        console.log('Logging in with:', username, password);
        try{
            setLoading(true);
            let data = {
                username, 
                password
            }
            const response = await AuthServices.loginUser(data);
            console.log(response.data);
            localStorage.setItem('todoAppUser',JSON.stringify(response.data));
            message.success("logged in Successfully");
            navigate('/todo');
            setLoading(false);
        }catch(e){
            console.log(e);
            message.error(getErrorMessage(e))
            setLoading(false);
        }
    };


    return(
        <>
         <Navbar active= "my Task"/>
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
                <div className={styles.button_container}>
                <button disabled={!username || !password} onClick={handleSubmit}>
                        {loading ? 'Logging in...' : 'Login'}
                </button>
                </div>
            </div>
        </div>
         </>
    );
}

export default Login