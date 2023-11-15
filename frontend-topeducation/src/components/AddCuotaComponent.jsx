import React, { useState } from 'react';

function AddCuotaComponent({ maxCuotas, aranceles, onSubmit }) {
  const [selectedArancel, setSelectedArancel] = useState('');
  const [cantidadCuotas, setCantidadCuotas] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica si se seleccionó un arancel
    if (!selectedArancel) {
      alert('Por favor, seleccione un arancel.');
      return;
    }
    // Llama a la función onSubmit con la cantidad de cuotas y el ID del arancel seleccionado
    onSubmit(cantidadCuotas, selectedArancel);
  };

  return (
    <div className="text-center">
      <h3>Agregar Cuotas</h3>
      <form onSubmit={handleSubmit}>
        <div className="card-body">
          <label>
            Arancel:
            <select
              className="form-select"
              value={selectedArancel}
              onChange={(e) => setSelectedArancel(e.target.value)}
            >
              <option value="" disabled>Seleccione un arancel</option>
              {aranceles.map(arancel => (
                <option key={arancel.idArancel} value={arancel.idArancel}>{arancel.valor} / {arancel.anio} </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            Cantidad de Cuotas (máximo {maxCuotas}):
            <input
              className="form-control"
              type="number"
              value={cantidadCuotas}
              onChange={(e) => setCantidadCuotas(Math.min(parseInt(e.target.value, 10), maxCuotas))}
              min="1"
              max={maxCuotas}
            />
          </label>
          <br />
          <button className="btn btn-primary" type="submit">Agregar Cuotas</button>
        </div>
      </form>
    </div>
  );
}

export default AddCuotaComponent;
