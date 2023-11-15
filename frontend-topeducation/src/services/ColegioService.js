import axios from "axios";

//local
const COLEGIO_API_URL = "http://34.41.239.179:9000/colegio/";

//k8s
//const COLEGIO_API_URL = "http://gateway-service:9000/colegio/";

class ColegioService {
  getColegios() {
    return axios.get(COLEGIO_API_URL);
  }

  createColegio(colegio) {
    return axios.post(COLEGIO_API_URL, colegio);
  }

  getColegioById(colegioId) {
    return axios.get(COLEGIO_API_URL + "/" + colegioId);
  }

}

export default new ColegioService();
