import React, { useState, useEffect } from 'react';
import ColegioService from '../services/ColegioService';
import { useParams } from 'react-router-dom';

function ViewColegioComponent() {
    const { id } = useParams();
    const [colegio, setColegio] = useState({});

    useEffect(() => {
        ColegioService.getColegioById(id).then(res => {
            setColegio(res.data);
        });
    }, [id]);

    return (
        <div>
            <br />
            <div className="col-md-6 offset-md-3">
                <h3 className="text-center"> Ver Detalle Colegio</h3>
                <div className="card-body">
                    <div className="card-body">
                        <label> Nombre: </label>
                        <div className="card"> {colegio.nombre}</div>
                    </div>
                    <div className="card-body">
                        <label> Tipo colegio: </label>
                        <div className="card"> {colegio.tipoColegio ? colegio.tipoColegio.descripcion : 'Tipo de colegio no definido'}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewColegioComponent;