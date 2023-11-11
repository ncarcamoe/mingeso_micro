import React, { useState, useEffect } from 'react';
import ColegioService from '../services/ColegioService';
import { useNavigate  } from 'react-router-dom';

function ListColegioComponent() {
    const [colegios, setColegios] = useState([]);
    const navigate = useNavigate();

    const handleClickAgregarColegio = () => {
        navigate('/add-colegio');
    };

    const handleClickViewColegio = (id) => {
        navigate(`/view-colegio/${id}`);
    };

    const handleClickUpdateColegio = (id) => {
        alert("Updating a Colegio is still under construction...");
    };

    const handleClickDeleteColegio = (id) => {
        alert("Deleting a Colegio is still under construction...");
    };

    useEffect(() => {
        ColegioService.getColegios().then((res) => {
            setColegios(res.data);
        });
    }, []);

    return (
        <div>
            <h2 className="text-center">Lista de Colegios</h2>
            <div className="row">
                <button className="btn btn-primary" onClick={handleClickAgregarColegio}>
                    Agregar Colegio
                </button>
            </div>
            <br />
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th> Nombre</th>
                            <th> Tipo Colegio</th>
                            <th> Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {colegios.map(colegio => (
                            <tr key={colegio.idColegio}>
                                <td>{colegio.nombre}</td>
                                <td>{colegio.tipoColegio.descripcion}</td>
                                <td>
                                    <button onClick={() => handleClickViewColegio(colegio.idColegio)} className="btn btn-info">
                                        View
                                    </button>
                                    <button style={{ marginLeft: "10px" }} onClick={() => handleClickUpdateColegio(colegio.id)} className="btn btn-info">
                                        Update
                                    </button>
                                    <button style={{ marginLeft: "10px" }} onClick={() => handleClickDeleteColegio(colegio.id)} className="btn btn-danger">
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

export default ListColegioComponent;