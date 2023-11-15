import React, { useState } from 'react';
import ArancelService from '../services/ArancelService';
import { useNavigate } from 'react-router-dom';

function CreateArancelComponent() {
    const [arancel, setArancel] = useState({
        
    });
    const navigate = useNavigate();

    const saveArancel = (e) => {
        e.preventDefault();
        ArancelService.createArancel(arancel).then(res => {
            navigate('/aranceles');
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setArancel(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const cancel = () => {
        navigate('/aranceles');
    }

    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Agregar Arancel</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label> Valor: </label>
                                    <input placeholder="Valor" name="valor" className="form-control"
                                        value={arancel.valor} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label> Año: </label>
                                    <input placeholder="Año" name="anio" className="form-control"
                                        value={arancel.anio} onChange={handleChange} />
                                </div>

                                <button className="btn btn-success" onClick={saveArancel}>Save</button>
                                <button className="btn btn-danger" onClick={cancel} style={{ marginLeft: "10px" }}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default CreateArancelComponent;