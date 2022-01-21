import React, { useState } from 'react';
import './login.css';

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="TLogin">
            <div className="Containerlogin">
                <div className="wraplogin">
                    <form className="formlogin">
                        <span className="logintitle">Bem Vindo!</span>
                        <div className="wrapinput">
                            <input className={email !== "" ? 'has-val input' : 'input'} type="email" value={email} onChange={e => setEmail(e.target.value)} />
                            <span className="focusinput" data-placeholder="Email"></span>
                        </div>
                        <div className="wrapinput">
                            <input className={password !== "" ? 'has-val input' : 'input'} type="password" value={password} onChange={e => setPassword(e.target.value)} />
                            <span className="focusinput" data-placeholder="Senha"></span>
                        </div>

                        <div className="loginbtn">
                            <button className="loginbtnform" type='Submit'>Entrar</button>
                        </div>

                        <div className="textlogin">
                            <span className="conta">Não possui conta? </span>
                            <a className="criarconta" href='#'> Criar conta.</a>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}
