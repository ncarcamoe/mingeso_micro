import React, { useState, useEffect } from 'react';
import ArancelService from '../services/ArancelService';
import { useNavigate  } from 'react-router-dom';

function ListArancelComponent() {
    const [aranceles, setAranceles] = useState([]);
    const navigate = useNavigate();

    const handleClickAgregarArancel = () => {
        navigate('/add-arancel');
    };

    const handleClickViewArancel = (id) => {
        navigate(`/view-arancel/${id}`);
    };

    const handleClickUpdateArancel = (id) => {
        alert("Updating a Arancel is still under construction...");
    };

    const handleClickDeleteArancel = (id) => {
        alert("Deleting a Arancel is still under construction...");
    };

    useEffect(() => {
        ArancelService.getAranceles().then((res) => {
            setAranceles(res.data);
        });
    }, []);

    return (
        <div>
            <h2 className="text-center">Lista de Aranceles</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={handleClickAgregarArancel}>
                    Agregar Arancel
                </button>
            </div>
            <br />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Valor</th>
                            <th> Año</th>
                            <th> Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {aranceles.map(arancel => (
                            <tr key={arancel.idArancel}>
                                <td>{arancel.valor}</td>
                                <td>{arancel.anio}</td>
                                <td>
                                    <button onClick={() => handleClickViewArancel(arancel.idArancel)} className="btn btn-info">
                                        View
                                    </button>
                                    <button style={{ marginLeft: "10px" }} onClick={() => handleClickUpdateArancel(arancel.id)} className="btn btn-info">
                                        Update
                                    </button>
                                    <button style={{ marginLeft: "10px" }} onClick={() => handleClickDeleteArancel(arancel.id)} className="btn btn-danger">
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

export default ListArancelComponent;