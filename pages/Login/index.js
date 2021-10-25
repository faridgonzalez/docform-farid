import React, { useState, useEffect, useContext ,Fragment } from 'react';

import { Link, useHistory } from 'react-router-dom';

import { login } from '../../services/Auth';
import toast from 'react-hot-toast';

function Login() {

    const history = useHistory();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    useEffect(
        ( ) => {
            document.title= 'docForm - Iniciar sesión';
        },[]
    )

    return (


            <Fragment>

            <div style={{
                height: "100vh",
                background: "#FFF",
                overflow: "auto"
            }}>
                <div style={{
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "auto"
                        }}>
                    <div style={{
                            padding: "20px",
                            minWidth: "400px",
                            backgroundColor:"#fff",
                            borderRadius: "10px",
                            boxShadow:" 0px 5px 15px 0px rgba(112,112,112,0.48)"
                        }}>
                        <div style={{
                            textAlign: "center",
                            
                        }}>
                            <div style={{
                                fontSize: "35px",
                                fontWeight: "600",
                                color: "#1E3142",
                                }}>
                            Docform
                            </div>
                            <div className="text-primary"
                                 style={{
                                        fontSize: "18px",
                                        fontWeight: "600",
                                    }}>
                                Inicie sesión en su cuenta
                            </div>

                        </div>
                        <br />
                        <div>
                            <div>
                                <div className="mb-2" 
                                     style={{
                                        fontWeight: "500"
                                    }}>
                                Correo electrónico
                                </div>
                                <input 
                                 type="email" 
                                 name="email" 
                                 className="form-control shadow-none"
                                 style={{
                                    background: "#F3F4F5",
                                    border: "none"
                                    }} 
                                 placeholder="ejemplo@gmail.com" 
                                 value={Email} onChange={
                                    (e) => {
                                        setEmail(e.target.value);
                                    }
                                 }/>
                            </div>
                            <br />
                            <div>
                                <div className="mb-2" 
                                     style={{
                                        fontWeight: "500"
                                     }}>
                                Contraseña
                                </div>
                                <input 
                                type="password" 
                                name="password"
                                className="form-control shadow-none" 
                                style={{
                                    background: "#F3F4F5",
                                    border: "none"
                                    }}
                                placeholder="Contraseña" 
                                value={Password} onChange={
                                    (e) => {
                                        setPassword(e.target.value);
                                    }
                                }/>
                            </div>
                            <br />
                            <div>
                                <button className="btn btn-primary" 
                                        style={{
                                            width: "100%",
                                            padding: "10px", 
                                        }} 
                                        /*onClick={(e) => {
            
                                                if (Email != "" && Password != "") {
                                                    login({
                                                        email: Email,
                                                        password: Password
                                                    }).then((res) => {
            
                                                        toast.success('Identificación correcta!.')
            
                                                        if (res.rol != "master") {
            
                                                            localStorage.clear();
            
                                                            localStorage.setItem("say-token", res.token);
                                                            
            
            
                                                        } else {
                                                            localStorage.setItem("say-ref", res.ref);

                                                            history.push("/admin/pending");
                                                        }
            
                                                    }).catch((err) => {
                                                        if (err.response) {
                                                            toast.error(err.response.data.message)
                                                        }
                                                    })
                                                } else {
                                                    toast.error("Complete el formulario para continuar")
                                                }
            
                                            }
                                        }*/
                                        >
                                    Iniciar sesión
                                </button>
                                <br />
                                <div style={{
                                    paddingTop: "10px",
                                    textAlign: "center"
                                }}>
                                    <Link to="/Register">Registrate</Link>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                </div>
            </Fragment>

    );
}

export default Login;
