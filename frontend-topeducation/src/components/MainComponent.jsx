import React from "react";
import { useNavigate } from "react-router-dom";
import Estudiantes from "../images/estudiantes.png"
import "../styles/main.css";
import "../styles/listas.css";
import "../styles/subir_excel.css";
import "../styles/navbar.css";
import "../styles/agregar.css";

function MainComponents() {
    const navigate = useNavigate();

    const handleClickListaTipoColegios = () => {
        navigate("/tipoColegios");
    };
    const handleClickListaColegios = () => {
        navigate("/colegios");
    };
    const handleClickListaEstudiantes = () => {
        navigate("/estudiantes");
    };
    const handleClickGenerarCuotas = () => {
        navigate("/generar_cuotas");
    };
    const handleClickListaCuotas = () => {
        navigate("/lista_cuotas");
    };
    return (
        <div>
            <div className="container_main">
                <div className="card" onClick={handleClickListaTipoColegios}>
                    <img id="tipoColegios" src={Estudiantes} alt="Imagen_1" />
                    <h2>Tipos de colegios</h2>
                </div>
                <div className="card" onClick={handleClickListaColegios}>
                    <img id="colegios" src={Estudiantes} alt="Imagen_1" />
                    <h2>Colegios</h2>
                </div>
                <div className="card" onClick={handleClickListaEstudiantes}>
                    <img id="estudiantes" src={Estudiantes} alt="Imagen_1" />
                    <h2>Estudiantes</h2>
                </div>
                <div className="card" onClick={handleClickListaEstudiantes}>
                    <img id="lista_estudiantes" src={Estudiantes} alt="Imagen_1" />
                    <h2>Aranceles</h2>
                </div>
                <div className="card" onClick={handleClickGenerarCuotas}>
                    <img id="generar_cuotas" src={Estudiantes} alt="Imagen_1" />
                    <h2>Generar Cuotas</h2>
                </div>
                <div className="card" onClick={handleClickListaCuotas}>
                    <img id="lista_cuotas" src={Estudiantes} alt="Imagen_1" />
                    <h2>Listado de Cuotas</h2>
                </div>
            </div>
        </div>
    );
}

export default MainComponents;