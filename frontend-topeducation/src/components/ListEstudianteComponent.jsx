import React, { useState, useEffect } from "react";
import EstudianteService from "../services/EstudianteService";
import { useNavigate } from "react-router-dom";

function ListEstudianteComponent() {
  const [estudiantes, setEstudiantes] = useState([]);
  const navigate = useNavigate();

  const handleClickAgregarEstudiante = () => {
    navigate("/add-estudiante");
  };

  const handleClickViewEstudiante = (id) => {
    navigate(`/view-cuota/${id}`);
  };

  const handleClickUpdateEstudiante = (id) => {
    alert("Updating a Estudiante is still under construction...");
  };

  const handleClickDeleteEstudiante = (id) => {
    alert("Deleting a Estudiante is still under construction...");
  };

  useEffect(() => {
    EstudianteService.getEstudiantes().then((res) => {
      setEstudiantes(res.data);
    });
  }, []);

  return (
    <div>
      <h2 className="text-center">Lista de Estudiantes</h2>
      <div className="row">
        <button
          className="btn btn-primary"
          onClick={handleClickAgregarEstudiante}
        >
          Agregar Estudiante
        </button>
      </div>
      <br />
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Rut</th>
              <th> Nombre</th>
              <th> Apellido Principal</th>
              <th> Apellido Secundario</th>
              <th> Email</th>
              <th> Fecha Nacimiento</th>
              <th> Año Egreso</th>
              <th> Colegio</th>
              <th> Acciones</th>
            </tr>
          </thead>
          <tbody>
            {estudiantes.map((estudiante) => (
              <tr key={estudiante.idEstudiante}>
                <td>{estudiante.rut}</td>
                <td>{estudiante.nombre}</td>
                <td>{estudiante.apellidoPrimario}</td>
                <td>{estudiante.apellidoSecundario}</td>
                <td>{estudiante.email}</td>
                <td>{estudiante.fechaNacimiento}</td>
                <td>{estudiante.anioEgreso}</td>
                <td>{estudiante.colegio.nombre}</td>
                <td>
                  <button
                    onClick={() =>
                      handleClickViewEstudiante(estudiante.idEstudiante)
                    }
                    className="btn btn-info"
                  >
                    Ver aranceles
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

export default ListEstudianteComponent;
