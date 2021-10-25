import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { register } from '../../services/Auth';
import toast from 'react-hot-toast';

function Register() {
    const history = useHistory();

    const [Name, setName] = useState('');
    const [Identification, setIdentification] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    useEffect(
        ( ) => {
            document.title= 'docForm - Registrate';
        },[]
    )



    return (


            <Fragment>

            <div style={{
                    height: "100vh",
                    background: "#FFF",
                    overflow: "auto",
                   
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
                        minWidth: "600px",
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
                                Crea tu cuenta
                            </div>
                            </div>
                            <br />
                            <div>
                                <div>
                                    <div>
                                        <div className="mb-2" 
                                            style={{
                                                fontWeight: "500"
                                            }}>
                                        Nombre completo
                                        </div>
                                        <input 
                                        type="text" 
                                        name="name" 
                                        className="form-control shadow-none"
                                        style={{
                                            background: "#F3F4F5",
                                            border: "none"
                                            }} 
                                        placeholder="Ej: Pepito Perez" 
                                        value={Name} onChange={
                                            (e) => {
                                                setName(e.target.value);
                                            }
                                        }/>
                                    </div>
                                    <br/>
                                    <div>
                                        <div className="mb-2" 
                                            style={{
                                                fontWeight: "500"
                                            }}>
                                        Identificacion
                                        </div>
                                        <input 
                                        type="number" 
                                        name="identification" 
                                        className="form-control shadow-none"
                                        style={{
                                            background: "#F3F4F5",
                                            border: "none"
                                            }} 
                                        placeholder="Ej: 1014569852" 
                                        value={Identification} onChange={
                                            (e) => {
                                                setIdentification(e.target.value);
                                            }
                                        }/>
                                    </div>
                                    <br/>
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
                                        placeholder="Ej: ejemplo@gmail.com" 
                                        value={Email} onChange={
                                            (e) => {
                                                setEmail(e.target.value);
                                            }
                                        }/>
                                    </div>
                                    <br/>
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
                                                onClick={
                                                    (e) => {
                    
                                                        if (Name != "" && Identification != ""&& Email != "" && Password != "") {
                                                            register({
                                                                name: Name,
                                                                identification: Identification,
                                                                email: Email,
                                                                password: Password
                                                            }).then((res) => {
                    
                                                                toast.success('¡Tu cuenta fue creada correctamente! Inicia sesión.');
                    
                                                                history.push("/login");
                    
                                                            }).catch((err) => {
                                                                if (err.response) {
                                                                    toast.error(err.response.data.message)
                                                                }
                                                            })
                                                        } else {
                                                            toast.error("Complete el formulario para continuar")
                                                        }
                    
                                                    }
                                                }
                                                >
                                            Crear cuenta
                                        </button>
                                        <br />
                                        <div style={{
                                            paddingTop: "10px",
                                            textAlign: "center"
                                        }}>
                                            <Link to="/login">Ya tengo una cuenta</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                    </div>
                </div>

                </div>

            </Fragment>

    );
}

export default Register;
