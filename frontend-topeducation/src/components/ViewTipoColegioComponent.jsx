import React, { useState, useEffect } from 'react';
import TipoColegioService from '../services/TipoColegioService';
import { useParams } from 'react-router-dom';

function ViewTipoColegioComponent() {
    const { id } = useParams();
    const [tipoColegio, setTipoColegio] = useState({});

    useEffect(() => {
        TipoColegioService.getTipoColegioById(id).then(res => {
            setTipoColegio(res.data);
        });
    }, [id]);

    return (
        <div>
            <br />
            <div className="col-md-6 offset-md-3">
                <h3 className="text-center"> Ver Detalle Tipo Colegio</h3>
                <div className="card-body">
                    <div className="card-body">
                        <label> Descripcion: </label>
                        <div className="card"> {tipoColegio.descripcion}</div>
                    </div>
                    <div className="card-body">
                        <label> Maximo de cuotas: </label>
                        <div className="card"> {tipoColegio.maximoCuotas}</div>
                    </div>
                    <div className="card-body">
                        <label> Porcentaje de descuento: </label>
                        <div className="card"> {tipoColegio.porcDescuento}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewTipoColegioComponent;