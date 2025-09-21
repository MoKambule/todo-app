
import { Link,useNavigate } from 'react-router-dom';
import styles from './register.module.css';
import React, { useState } from 'react';
import { VscAccount } from "react-icons/vsc";



function Register(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit =  async () => {
        console.log('Logging in with:', username, password);
        try{
            setLoading(true);
            let data = {
                name,
                lastname,
                username, 
                password
            }
            const response = await AuthServices.loginUser(data);
            console.log(response.data);
            localStorage.setItem('todoAppUser',JSON.stringify(response.data));
            message.success("registered Successfully");
            navigate('/login');
            setLoading(false);
        }catch(e){
            console.log(e);
            message.error(getErrorMessage(e))
            setLoading(false);
        }
    };

    return(
        <div className={styles.login_card}>
            <div>
                 <div className={styles.icon_container}>
                <VscAccount className={styles.icon_large} />
            </div>

                <h4>Register</h4>
                 <div className={styles.input_wrapper}>
                    <input placeholder="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}/>
                
                    <input placeholder="lastname"
                    value={lastname}
                    onChange={(e)=>setLastname(e.target.value)}/>
                </div>
                <div className={styles.input_wrapper}>
                    <input placeholder="username"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                 <div className={styles.input_wrapper}>
                    <input  type="password" placeholder="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className={styles.input_info}>
                   Already have an account? <Link to="/login">Login</Link>
                </div>
                <div className={styles.button_container}>
                <button  loading={loading} disabled={!username || !password} onClick={handleSubmit}>Register</button>
                </div>
            </div>
        </div>
    )
}

export default Register