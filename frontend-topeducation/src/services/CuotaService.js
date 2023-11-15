import axios from "axios";

//local
//const CUOTA_API_URL = "http://localhost:9003/cuota/";

//k8s
const CUOTA_API_URL = "http://34.41.239.179:9000/cuota/";

class CuotaService {
  createCuota(cuota) {
    return axios.post(CUOTA_API_URL, cuota);
  }

  getCuotasByIdEstudiante(estudianteId) {
    return axios.get(CUOTA_API_URL + "buscarPorIdEstudiante/" + estudianteId);
  }
}

export default new CuotaService();
