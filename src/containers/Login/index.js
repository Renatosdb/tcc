import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from "react-router-dom";
import { auth, facebookAuthProvider } from '../../firebase';
import { FacebookLoginButton } from 'react-social-login-buttons';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = (event) => {
        event.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/");
            })
            .catch((e) => alert(e.message));
    };

    const register = (event) => {
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log('auth', auth)
                // history.push("/");
            })
            .catch((e) => alert(e.message));
    };

    const signInWithFacebook = () => {
        auth.signInWithPopup(facebookAuthProvider)
            .then(() => {
                window.location.assign("/");
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://lh3.googleusercontent.com/proxy/nH0Lw3-mQPF0EpZdibNZv_YMQ8FBhLqa00TsGuFpYTadabxP6Dh7zvXHlqJij3QwwbL6CVTbDZHO"
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Entrar</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Senha</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login__signInButton">Entrar</button>
                </form>

                <button onClick={register} className="login__registerButton">
                    Criar nova conta</button>
                <FacebookLoginButton className="mt-3 mb-3" onClick={signInWithFacebook} />
            </div>
        </div>
    );
}

export default Login;
