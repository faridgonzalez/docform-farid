import React, { useState, useEffect, useContext } from 'react';
import Env1App from '../../components/Env1App';
// import toast from 'react-hot-toast';


import { ReactComponent as PersonIcon } from '../../assets/icons/person.circle.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';
import { ReactComponent as AddIcon } from '../../assets/icons/plus.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/trash.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/pencil.svg';
import { ReactComponent as SaveIcon } from '../../assets/icons/save.svg';
import { ReactComponent as CancelIcon } from '../../assets/icons/xmark.svg';

function Doctors() {

    const [showNewForm, setShowNewForm] = useState(false);
    const [showNewText, setShowNewText] = useState(false);
    const [showAddButton, setShowAddButton] = useState(true);

    const [Name, setName] = useState('');
    const [Phone, setPhone] = useState('');
    const [Email, setEmail] = useState('');

    const [Doctors, setDoctors] = useState([{name:"farid gonzalez",
                                            id:"1",
                                            phone:"1234",
                                            email:"farro@gmail.com"},
                                            {name:"santiago gonzalez",
                                            id:"2",
                                            phone:"9876",
                                            email:"farrito@gmail.com"},
                                            {name:"adfhsd",
                                            id:"3",
                                            phone:"456457",
                                            email:"shsdfo@gmail.com"},
                                            {name:"adfhsd",
                                            id:"3",
                                            phone:"456457",
                                            email:"shsdfo@gmail.com"}]);

                        
    const onClearDoctorForm = () => {
        setName("");
        setPhone("");
        setEmail("");
    };
    

    useEffect(
        ( ) => {
            document.title= 'docForm - Medicos';
        },[]
    )


    return (
        

        <Env1App>
            <div style={{
                height: "100vh",
                background: "#FFF",
                overflow:"auto"
            }}>
           
            <div style={{
                padding:"2%",
                fontSize:"30px",
                fontWeight:"bold",
            }}>
                <div className="row text-center">
                    <h2>Medicos</h2>
                </div>
            </div>
            <div>

                <div style={{width:"90%",
                            margin:"0 auto"
                        }}>
                    <div className="row">
                        <div className="col-12">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at lobortis augue, id efficitur leo. Donec fringilla faucibus sapien, quis eleifend libero ornare a. Aliquam imperdiet suscipit pellentesque. Etiam sagittis sollicitudin velit, consequat faucibus elit posuere ut. In ligula libero, suscipit eu mattis quis, consequat non lorem. Curabitur ultricies libero a augue vestibulum condimentum. Aenean dui nulla, faucibus quis elit vitae, tincid</p>
                        </div>
                        {
                            (!showAddButton) ? <></> : <>
                        <div className="col mt-3">
                            <div className="d-flex justify-content-end">  
                                <button type="button" className="btn btn-primary btn-lg"
                                onClick={
                                    () => {
                                        setShowNewForm(true)
                                        setShowNewText(false)
                                    }
                                } >
                                    <AddIcon style={{
                                        width: "20px",
                                        height: "20px",
                                        fill: "#FFF",
                                        marginRight:"20px"
                                    }}/> 
                                Nuevo medico
                                </button>
                            </div>
                        </div>
                    </>}
                    </div>
                </div>
                <div class="container">
                    {(!showNewForm) && <>
                        <div className="row" style={{
                                // marginTop:"20px"
                            }} >
                                {
                                 Doctors.map((doctor) =>
                                    <div class="col-4" >
                                        <div  key={doctor.id} className=" bg-body rounded"
                                         style={{
                                            background: "#fff",
                                            display: "grid",
                                            gridTemplateColumns: "auto",
                                            gridTemplateRows: "auto 50px",
                                            borderRadius: "20px",
                                            padding: "20px",
                                            marginTop: "30px",
                                            boxShadow:" 0px 5px 15px 0px rgba(112,112,112,0.48)"
                                        }}>

                                            <div style={{
                                                display: "grid",
                                                gridTemplateColumns: "100px auto",
                                                gridTemplateRows: "auto",
                                                alignSelf: "center",
                                                marginTop: "30px"

                                            }}>
                                                <div>
                                                    <div style={{ width: "90px", height: "90px", borderRadius: "50%" }}>
                                                    <PersonIcon style={{
                                                                    width: "90px",
                                                                    height: "90px",
                                                                    borderRadius: "50%",
                                                                    fill: "#000"
                                                                }} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div style={{ fontWeight: "700", textTransform: "uppercase", fontSize: "20px" }}>
                                                        {doctor.name} 
                                                    </div>
                                                    <div>
                                                    <PhoneIcon style={{
                                                                    width: "20px",
                                                                    height: "20px",
                                                                    fill: "#000",
                                                                    marginRight:"20px"
                                                                }}/>
                                                        {doctor.phone}
                                                    </div>
                                                    <div>
                                                    <EmailIcon style={{
                                                                    width: "20px",
                                                                    height: "20px",
                                                                    fill: "#000",
                                                                    marginRight:"20px"
                                                                }}/>
                                                        {doctor.email}
                                                    </div>
                                                </div>
                                            </div>

                                            <div style={{
                                                margin:"",
                                                alignSelf: "center",
                                                display: "flex",
                                                justifyContent:"space-evenly"
                                            }}>
                                                <button class="btn btn-primary"
                                                    style={{
                                                        marginRight: "20px"
                                                    }}
                                                    onClick={
                                                        (e) => {

                                                            setShowNewForm(true);
                                                            setShowNewText(true);
                                                            setShowAddButton(false);

                                                            setName(doctor.name);
                                                            setPhone(doctor.phone);
                                                            setEmail(doctor.email);

                                                            
                                                        }}>
                                                    <EditIcon style={{
                                                        width: "20px",
                                                        height: "20px",
                                                        fill: "#FFF",
                                                        marginRight:"5px"
                                                    }}/> Editar </button>
                                                <button class="btn btn-danger" >
                                                    <DeleteIcon style={{
                                                        width: "20px",
                                                        height: "20px",
                                                        fill: "#FFF",
                                                        marginRight:"5px"
                                                    }}/> Eliminar</button>
                                            </div>

                                        </div>
                                    </div>
                                )
                            }
                            </div>
                            </>
                                }
                        </div>
                    
                
                    




                

                    <div className="container">
                    {
                        (showNewForm) && <>

                            <h3 style={{
                                marginTop:"50px"
                            }}>
                            {
                                (showNewText) ? "Editar medico" : "Agregar medico"
                            }
                            </h3>

                            <br />

                            <div className="row">

                                <div className="col-6 mt-3">
                                    <div style={{
                                        fontWeight: "700",
                                    }}>Nombre completo</div>

                                    <input type="text" value={Name} onChange={
                                        (e) => {
                                            setName(e.target.value)
                                        }
                                    } className="form-control shadow-none" style={{
                                        width: "100%",
                                        padding: "10px",
                                        fontSize: "20px",
                                        background: "#F2F7F8",
                                        border: "0px"
                                    }} placeholder="Nombre completo" />
                                </div>

                                <div className="col-6 mt-3">
                                    <div style={{
                                        fontWeight: "700",
                                    }}>Telefono </div>

                                    <input type="number" value={Phone} onChange={
                                        (e) => {
                                            setPhone(e.target.value)
                                        }
                                    } className="form-control shadow-none" style={{
                                        width: "100%",
                                        padding: "10px",
                                        fontSize: "20px",
                                        background: "#F2F7F8",
                                        border: "0px"
                                    }} placeholder="Ej: 3213456789" />
                                </div>


                                <div className="col-6 mt-3">
                                    <div style={{
                                        fontWeight: "700",
                                    }}>Correo electronico </div>

                                    <input type="email" value={Email} onChange={
                                        (e) => {
                                            setEmail(e.target.value)
                                        }
                                    } className="form-control shadow-none" style={{
                                        width: "100%",
                                        padding: "10px",
                                        fontSize: "20px",
                                        background: "#F2F7F8",
                                        border: "0px"

                                    }} placeholder="ejemplo@gmail.com" />
                                </div>



                            </div>

                            <br />

                            <div>
                                <button className="btn btn-primary shadow-none" onClick={
                                    () => {
                                        setShowAddButton(true);
                                        setShowNewForm(false);
                                        onClearDoctorForm(); 
                                        /*
                                        // Funcion para crear

                                        if (names != "") {

                                            // Almacenamos el contacto

                                            save({
                                                ref,
                                                iid: window.localStorage.getItem("say-bussine"),
                                                Name,
                                                Phone,
                                                Email,
                                                
                                            }).then((res) => {
                                                console.log(res);

                                                setShowNewForm(false);
                                            });

                                        } else {
                                            toast.error("El nombre del contacto no puede estar en blanco")
                                        }

                                        //icono guardar cambios
                                    */}}>

                                    <SaveIcon style={{
                                        width: "20px",
                                        height: "20px",
                                        fill: "#FFF",
                                        marginRight:"5px"
                                    }}/> 
                                    {
                                        (showNewText) ? "Guardar cambios" : "Guardar"
                                    }


                                </button >
                                <button className="btn btn-danger shadow-none" style={{
                                    marginLeft: "5px"
                                }} onClick={
                                    () => {
                                        setShowNewForm(false);
                                        setShowAddButton(true);
                                        onClearDoctorForm();
                                    }}>
                                    <CancelIcon style={{
                                        width: "18px",
                                        height: "18px",
                                        fill: "#FFF",
                                        marginRight:"5px"
                                    }}/>
                                    Cancelar
                                </button >
                            </div >


                        </>
                    }
                    </div>
                </div>
                </div>
        </Env1App >

                
    );
}

export default Doctors;

