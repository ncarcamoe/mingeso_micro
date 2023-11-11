import React, { useState, useEffect } from 'react';
import TipoColegioService from '../services/TipoColegioService';
import { useNavigate  } from 'react-router-dom';

function ListTipoColegioComponent() {
    const [tipoColegios, setTipoColegios] = useState([]);
    const navigate = useNavigate();

    const handleClickAgregarTipoColegio = () => {
        navigate('/add-tipoColegio');
    };

    const handleClickViewTipoColegio = (id) => {
        navigate(`/view-tipoColegio/${id}`);
    };

    const handleClickUpdateTipoColegio = (id) => {
        alert("Updating a TipoColegio is still under construction...");
    };

    const handleClickDeleteTipoColegio = (id) => {
        alert("Deleting a TipoColegio is still under construction...");
    };

    useEffect(() => {
        TipoColegioService.getTipoColegios().then((res) => {
            setTipoColegios(res.data);
        });
    }, []);

    return (
        <div>
            <h2 className="text-center">Lista de Tipos de Colegios</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={handleClickAgregarTipoColegio}>
                    Agregar Tipo Colegio
                </button>
            </div>
            <br />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Descripcion</th>
                            <th> Maximo de cuotas</th>
                            <th> Porcentaje de descuento</th>
                            <th> Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tipoColegios.map(tipoColegio => (
                            <tr key={tipoColegio.idTipoColegio}>
                                <td>{tipoColegio.descripcion}</td>
                                <td>{tipoColegio.maximoCuotas}</td>
                                <td>{tipoColegio.porcDescuento}</td>
                                <td>
                                    <button onClick={() => handleClickViewTipoColegio(tipoColegio.idTipoColegio)} className="btn btn-info">
                                        View
                                    </button>
                                    <button style={{ marginLeft: "10px" }} onClick={() => handleClickUpdateTipoColegio(tipoColegio.id)} className="btn btn-info">
                                        Update
                                    </button>
                                    <button style={{ marginLeft: "10px" }} onClick={() => handleClickDeleteTipoColegio(tipoColegio.id)} className="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListTipoColegioComponent;