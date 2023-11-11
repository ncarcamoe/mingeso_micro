import React, { useState, useEffect } from 'react';
import EstudianteService from '../services/EstudianteService';
import { useParams } from 'react-router-dom';

function ViewEstudianteComponent() {
    const { id } = useParams();
    const [estudiante, setEstudiante] = useState({});

    useEffect(() => {
        EstudianteService.getEstudianteById(id).then(res => {
            setEstudiante(res.data);
        });
    }, [id]);

    return (
        <div>
            <br />
            <div className="col-md-6 offset-md-3">
                <h3 className="text-center"> Ver Detalle Estudiante</h3>
                <div className="card-body">
                    <div className="card-body">
                        <label> Rut: </label>
                        <div className="card"> {estudiante.rut}</div>
                    </div>
                    <div className="card-body">
                        <label> Nombre: </label>
                        <div className="card"> {estudiante.nombre}</div>
                    </div>
                    <div className="card-body">
                        <label> Apellido Primario: </label>
                        <div className="card"> {estudiante.apellidoPrimario}</div>
                    </div>
                    <div className="card-body">
                        <label> Apellido Secundario: </label>
                        <div className="card"> {estudiante.apellidoSecundario}</div>
                    </div>
                    <div className="card-body">
                        <label> Email: </label>
                        <div className="card"> {estudiante.email}</div>
                    </div>
                    <div className="card-body">
                        <label> Fecha de Nacimiento: </label>
                        <div className="card"> {estudiante.fechaNacimiento}</div>
                    </div>
                    <div className="card-body">
                        <label> Año de Egreso: </label>
                        <div className="card"> {estudiante.anioEgreso}</div>
                    </div>
                    <div className="card-body">
                        <label> Colegio: </label>
                        <div className="card"> {estudiante.colegio ? estudiante.colegio.nombre : 'colegio no definido'}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewEstudianteComponent;