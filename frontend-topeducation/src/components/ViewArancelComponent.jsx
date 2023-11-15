import React, { useState, useEffect } from 'react';
import ArancelService from '../services/ArancelService';
import { useParams } from 'react-router-dom';

function ViewArancelComponent() {
    const { id } = useParams();
    const [arancel, setArancel] = useState({});

    useEffect(() => {
        ArancelService.getArancelById(id).then(res => {
            setArancel(res.data);
        });
    }, [id]);

    return (
        <div>
            <br />
            <div className="col-md-6 offset-md-3">
                <h3 className="text-center"> Ver Detalle Arancel</h3>
                <div className="card-body">
                    <div className="card-body">
                        <label> Valor: </label>
                        <div className="card"> {arancel.valor}</div>
                    </div>
                    <div className="card-body">
                        <label> Año: </label>
                        <div className="card"> {arancel.anio}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewArancelComponent;