import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ListTipoColegioComponent from './components/ListTipoColegioComponent';
import CreateTipoColegioComponent from './components/CreateTipoColegioComponent';
import ViewTipoColegioComponent from './components/ViewTipoColegioComponent';
import ListColegioComponent from './components/ListColegioComponent';
import CreateColegioComponent from './components/CreateColegioComponent';
import ViewColegioComponent from './components/ViewColegioComponent';
import ListEstudianteComponent from './components/ListEstudianteComponent';
import CreateEstudianteComponent from './components/CreateEstudianteComponent';
import ViewCuotaComponent from './components/ViewCuotaComponent';
import ListArancelComponent from './components/ListArancelComponent';
import CreateArancelComponent from './components/CreateArancelComponent';
import ViewArancelComponent from './components/ViewArancelComponent';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div>
      <Router>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
              <div className="container">
                  <Link to="/" className="navbar-brand">Inicio</Link>
              </div>
          </nav>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/tipoColegios" element={<ListTipoColegioComponent/>} />
            <Route path="/add-tipoColegio" element={<CreateTipoColegioComponent />} />
            <Route path="/view-tipoColegio/:id" element={<ViewTipoColegioComponent />} />
            <Route path="/colegios" element={<ListColegioComponent/>} />
            <Route path="/add-colegio" element={<CreateColegioComponent />} />
            <Route path="/view-colegio/:id" element={<ViewColegioComponent />} />
            <Route path="/estudiantes" element={<ListEstudianteComponent/>} />
            <Route path="/add-estudiante" element={<CreateEstudianteComponent />} />
            <Route path="/view-cuota/:id" element={<ViewCuotaComponent />} />
            <Route path="/aranceles" element={<ListArancelComponent/>} />
            <Route path="/add-arancel" element={<CreateArancelComponent />} />
            <Route path="/view-arancel/:id" element={<ViewArancelComponent />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
