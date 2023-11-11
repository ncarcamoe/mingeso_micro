import React, { useState } from 'react';
import TipoColegioService from '../services/TipoColegioService';
import { useNavigate } from 'react-router-dom';

function CreateTipoColegioComponent() {
    const [tipoColegio, setTipoColegio] = useState({
        
    });
    const navigate = useNavigate();

    const saveTipoColegio = (e) => {
        e.preventDefault();
        TipoColegioService.createTipoColegio(tipoColegio).then(res => {
            navigate('/tipoColegios');
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTipoColegio(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const cancel = () => {
        navigate('/tipoColegios');
    }

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Agregar Tipo Colegio</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Descripcion: </label>
                                    <input placeholder="Descripcion" name="descripcion" className="form-control"
                                        value={tipoColegio.descripcion} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Maximo de cuotas: </label>
                                    <input placeholder="Maximo de cuotas" name="maximoCuotas" className="form-control"
                                        value={tipoColegio.maximoCuotas} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Porcentaje de descuento: </label>
                                    <input placeholder="Porcentaje de descuento" name="porcDescuento" className="form-control"
                                        value={tipoColegio.porcDescuento} onChange={handleChange} />
                                </div>

                                <button className="btn btn-success" onClick={saveTipoColegio}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CreateTipoColegioComponent;