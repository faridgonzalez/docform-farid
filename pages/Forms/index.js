import React, { useState, useEffect, useContext } from 'react';
import Env1App from '../../components/Env1App';

import { ReactComponent as FormIcon } from '../../assets/icons/form.svg';
import { ReactComponent as AddIcon } from '../../assets/icons/plus.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/trash.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/pencil.svg';
import { ReactComponent as SaveIcon } from '../../assets/icons/save.svg';
import { ReactComponent as CancelIcon } from '../../assets/icons/xmark.svg';


function Forms() {





        const [showNewForm, setShowNewForm] = useState(false);
        const [showNewText, setShowNewText] = useState(false);
        const [showAddButton, setShowAddButton] = useState(true);
    
        const [NameForm, setNameForm] = useState('');
        const [Details, setDetails] = useState('');
    
        const [Forms, setForms] = useState([
                                                {name:"aqui va el nombre del formulario",
                                                id:"1",
                                                details:"aqui iria la descripcion"},
                                                {name:"aqui va el nombre del formulario",
                                                id:"2",
                                                details:"aqui iria la descripcion"},
                                                ]);
    
                            
        const onClearFormsForm = () => {
            setNameForm("");
            setDetails("");
        };
        
    
        useEffect(
            ( ) => {
                document.title= 'docForm - Formularios';
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
                        <h2>Lista de formularios</h2>
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
                                    Agregar formulario
                                    </button>
                                </div>
                            </div>
                        </>}
                        </div>
                    </div>
                    <div class="container">
                        {(!showNewForm) && <>
                            <div className="row">
                                    {
                                     Forms.map((form) =>
                                        <div class="col-6" >
                                            <div  key={form.id} className=" bg-body rounded"
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
                                                        <FormIcon style={{
                                                                        width: "90px",
                                                                        height: "90px",
                                                                        fill: "#000"
                                                                    }} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div style={{ fontWeight: "700", textTransform: "uppercase", fontSize: "20px" }}>
                                                            {form.name} 
                                                        </div>
                                                        <div className="mt-2">
                                                            <div style={{fontWeight: "700"}}>
                                                                Descripción
                                                            </div>
                                                            <div>
                                                                {form.details}
                                                            </div>
                                                            
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
    
                                                                setNameForm(form.name);
                                                                setDetails(form.details);
    
                                                                
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
                        
                    
                        
    
    
    
    
                    
    
                        <div className="container mb-5">
                        {
                            (showNewForm) && <>
    
                                <h3 style={{
                                    marginTop:"50px"
                                }}>
                                {
                                    (showNewText) ? "Editar Formulario" : "Agregar Formulario"
                                }
                                </h3>
    
                                <br />
    
                                <div className="row ">
    
                                    <div className="col mt-3">
                                        <div style={{
                                            fontWeight: "700",
                                        }}>Nombre del formulario</div>
    
                                        <input type="text" value={NameForm} onChange={
                                            (e) => {
                                                setNameForm(e.target.value)
                                            }
                                        } className="form-control shadow-none" style={{
                                            width: "100%",
                                            padding: "10px",
                                            fontSize: "20px",
                                            background: "#F2F7F8",
                                            border: "0px"
                                        }} placeholder="Asigne un nombre al formulario" />
                                    </div>
    
                                    <div>
                                            <div style={{
                                                fontWeight: "700",
                                                marginTop:"20px"
                                            }}>Descripción</div>

                                            <textarea type="text" value={Details} onChange={
                                                (e) => {
                                                    setDetails(e.target.value)
                                                }
                                            } className="w-100 shadow-none  rounded"
                                            style={{
                                                backgroundColor: "#F2F7f8",
                                                border: "0px",
                                                padding: "10px",
                                                resize: "none",
                                                minHeight: "150px",
                                                fontSize: "20px",
                                            }} placeholder="Agregue una descripción al formulario" ></textarea>
                                        </div>
    
    
    
                                </div>
    
                                <br />
    
                                <div>
                                    <button className="btn btn-primary shadow-none" onClick={
                                        () => {
                                            setShowAddButton(true);
                                            setShowNewForm(false);
                                            onClearFormsForm(); 
                                            }}>
    
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
                                            onClearFormsForm();
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

export default Forms;
