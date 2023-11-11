import React, { useState, useEffect } from 'react';
import EstudianteService from '../services/EstudianteService';
import ColegioService from '../services/ColegioService';
import { useNavigate } from 'react-router-dom';

function CreateEstudianteComponent() {
    const [estudiante, setEstudiante] = useState({
        colegio: { idColegio: '' }
    });

    const [colegios, setColegios] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        ColegioService.getColegios().then(res => {
            setColegios(res.data);
        });
    }, []);

    const saveEstudiante = (e) => {
        e.preventDefault();
        EstudianteService.createEstudiante(estudiante).then(res => {
            navigate('/estudiantes');
        });
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'colegio') {
            setEstudiante(prevState => ({
                ...prevState,
                [name]: { idColegio: value } 
            }));
        } else {
            setEstudiante(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    const cancel = () => {
        navigate('/estudiantes');
    }

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Agregar Estudiante</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Rut: </label>
                                    <input placeholder="Rut" name="rut" className="form-control"
                                        value={estudiante.rut} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Nombre: </label>
                                    <input placeholder="Nombre" name="nombre" className="form-control"
                                        value={estudiante.nombre} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Apellido Principal: </label>
                                    <input placeholder="Apellido Principal" name="apellidoPrimario" className="form-control"
                                        value={estudiante.apellidoPrimario} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Apellido Secundario: </label>
                                    <input placeholder="Apellido Secundario" name="apellidoSecundario" className="form-control"
                                        value={estudiante.apellidoSecundario} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Email: </label>
                                    <input placeholder="Email" name="email" className="form-control"
                                        value={estudiante.email} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Fecha Nacimiento: </label>
                                    <input placeholder="Fecha Nacimiento" name="fechaNacimiento" className="form-control"
                                        value={estudiante.fechaNacimiento} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Año Egreso: </label>
                                    <input placeholder="Año Egreso" name="anioEgreso" className="form-control"
                                        value={estudiante.anioEgreso} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Colegios: </label>
                                    <select name="colegio" className="form-control"
                                        value={estudiante.colegio} onChange={handleChange}>
                                        <option value="">Seleccione un colegio</option>
                                        {colegios.map(colegio => (
                                            <option key={colegio.idColegio} value={colegio.idColegio}>{colegio.nombre}</option>
                                        ))}
                                    </select>
                                </div>

                                <button className="btn btn-success" onClick={saveEstudiante}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CreateEstudianteComponent;