import React from "react";
import { useNavigate } from "react-router-dom";
import Estudiantes from "../images/estudiante.png"
import Arancel from "../images/Arancel.png"
import Colegio from "../images/colegio.png"
import TipoColegio from "../images/TipoColegio.png"
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
    const handleClickListaAranceles = () => {
        navigate("/aranceles");
    };
    return (
        <div>
            <div className="container_main">
                <div className="card" onClick={handleClickListaTipoColegios}>
                    <img id="tipoColegios" src={TipoColegio} alt="Imagen_1" />
                    <h2>Tipos de colegios</h2>
                </div>
                <div className="card" onClick={handleClickListaColegios}>
                    <img id="colegios" src={Colegio} alt="Imagen_1" />
                    <h2>Colegios</h2>
                </div>
                <div className="card" onClick={handleClickListaEstudiantes}>
                    <img id="estudiantes" src={Estudiantes} alt="Imagen_1" />
                    <h2>Estudiantes</h2>
                </div>
                <div className="card" onClick={handleClickListaAranceles}>
                    <img id="aranceles" src={Arancel} alt="Imagen_1" />
                    <h2>Aranceles</h2>
                </div>
            </div>
        </div>
    );
}

export default MainComponents;