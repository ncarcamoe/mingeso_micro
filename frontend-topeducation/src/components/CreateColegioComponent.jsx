import React, { useState, useEffect } from 'react';
import ColegioService from '../services/ColegioService';
import TipoColegioService from '../services/TipoColegioService';
import { useNavigate } from 'react-router-dom';

function CreateColegioComponent() {
    const [colegio, setColegio] = useState({
        tipoColegio: { idTipoColegio: '' }
    });

    const [tiposColegio, setTiposColegio] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        TipoColegioService.getTipoColegios().then(res => {
            setTiposColegio(res.data);
        });
    }, []);

    const saveColegio = (e) => {
        e.preventDefault();
        ColegioService.createColegio(colegio).then(res => {
            navigate('/colegios');
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'tipoColegio') {
            setColegio(prevState => ({
                ...prevState,
                [name]: { idTipoColegio: value } 
            }));
        } else {
            setColegio(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    }

    const cancel = () => {
        navigate('/colegios');
    }

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Agregar Colegio</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Nombre: </label>
                                    <input placeholder="Nombre" name="nombre" className="form-control"
                                        value={colegio.nombre} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Tipos de colegio: </label>
                                    <select name="tipoColegio" className="form-control"
                                        value={colegio.tipoColegio} onChange={handleChange}>
                                        <option value="">Seleccione un tipo de colegio</option>
                                        {tiposColegio.map(tipo => (
                                            <option key={tipo.idTipoColegio} value={tipo.idTipoColegio}>{tipo.descripcion}</option>
                                        ))}
                                    </select>
                                </div>

                                <button className="btn btn-success" onClick={saveColegio}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CreateColegioComponent;