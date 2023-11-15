import React, { useState, useEffect } from "react";
import EstudianteService from "../services/EstudianteService";
import CuotaService from "../services/CuotaService";
import ArancelService from "../services/ArancelService";
import AddCuotaComponent from './AddCuotaComponent';
import { useParams } from "react-router-dom";

function StudentGrid({
  estudiantes,
}) {
  return (
    <div className="text-center">
      <h2>Estudiante</h2>
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
                <td>
                  {estudiante.colegio
                    ? estudiante.colegio.nombre
                    : "colegio no definido"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ViewCuotaComponent() {
  const { id } = useParams();
  const [estudiante, setEstudiante] = useState({});
  const [cuotas, setCuotas] = useState([]);
  const [aranceles, setAranceles] = useState([]);
  const [showAddCuota, setShowAddCuota] = useState(false);

  useEffect(() => {
    EstudianteService.getEstudianteById(id).then((res) => {
      setEstudiante(res.data);
    });

    CuotaService.getCuotasByIdEstudiante(id).then((res) => {
      setCuotas(res.data);
    });

    ArancelService.getAranceles().then((res) => {
      setAranceles(res.data);
    });
  }, [id]);

  const handleAddCuotas = async (cantidadCuotas, selectedArancelId) => {
    try {
      // Crea un objeto cuota con los datos requeridos
      const cuotaData = {
        arancel: { idArancel: selectedArancelId },
        idEstudiante: parseInt(id),
        numCuota: cantidadCuotas,
      };

      // Llama al método createCuota de CuotaService para agregar las cuotas
      await CuotaService.createCuota(cuotaData);

      // Actualiza la lista de cuotas después de agregarlas
      const updatedCuotas = await CuotaService.getCuotasByIdEstudiante(id);
      setCuotas(updatedCuotas.data);
    } catch (error) {
      console.error("Error al agregar cuotas:", error);
    }

    // Oculta el componente AddCuotaComponent después de agregar las cuotas
    setShowAddCuota(false);
  };

  return (
    <div className="text-center">
      <br />
      <div >
        <h3> Detalles del Estudiante</h3>
        <div className="card-body">
          <StudentGrid
            estudiantes={[estudiante]} // Pasar solo el estudiante actual
            handleClickViewEstudiante={() => {}}
            handleClickUpdateEstudiante={() => {}}
            handleClickDeleteEstudiante={() => {}}
          />
        </div>
        <h3 className="text-center"> Cuotas del Estudiante</h3>
        <div className="card-body">
          <button className="btn btn-info" onClick={() => setShowAddCuota(true)}>Agregar Cuotas</button>
          {showAddCuota && (
            <AddCuotaComponent
              maxCuotas={estudiante.colegio.tipoColegio.maximoCuotas}
              aranceles={aranceles}
              onSubmit={handleAddCuotas}
            />
          )}
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Número de Cuota</th>
                <th>Valor de Cuota</th>
                <th>Fecha de Vencimiento</th>
                <th>Pagado</th>
                <th>Año del Arancel</th>
              </tr>
            </thead>
            <tbody>
              {cuotas.map((cuota) => (
                <tr key={cuota.idCuota}>
                  <td>{cuota.numCuota}</td>
                  <td>{cuota.valorCuota}</td>
                  <td>{cuota.fechaVencimiento}</td>
                  <td>{cuota.pagado ? "Sí" : "No"}</td>
                  <td>{cuota.arancel.anio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ViewCuotaComponent;
