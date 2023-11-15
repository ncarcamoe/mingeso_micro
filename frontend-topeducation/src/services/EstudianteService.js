import axios from "axios";

//local
const ESTUDIANTE_API_URL = "http://34.41.239.179:9000/estudiante/";

//k8s
//const ESTUDIANTE_API_URL = "http://gateway-service:9000/estudiante/";

class EstudianteService {
  getEstudiantes() {
    return axios.get(ESTUDIANTE_API_URL);
  }

  createEstudiante(estudiante) {
    return axios.post(ESTUDIANTE_API_URL, estudiante);
  }

  getEstudianteById(estudianteId) {
    return axios.get(ESTUDIANTE_API_URL + "/id/" + estudianteId);
  }

  getEstudianteByRut(estudianteRut) {
    return axios.get(ESTUDIANTE_API_URL + "/rut/" + estudianteRut);
  }
}

export default new EstudianteService();
