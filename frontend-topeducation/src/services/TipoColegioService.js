import axios from "axios";
//local
const TIPOCOLEGIO_API_URL = "http://34.41.239.179:9000/tipoColegio/";

//k8s
//const TIPOCOLEGIO_API_URL = "http://gateway-service:9000/tipoColegio/";

class TipoColegioService {
  getTipoColegios() {
    return axios.get(TIPOCOLEGIO_API_URL);
  }

  createTipoColegio(tipoColegio) {
    return axios.post(TIPOCOLEGIO_API_URL, tipoColegio);
  }

  getTipoColegioById(tipoColegioId) {
    return axios.get(TIPOCOLEGIO_API_URL + "/" + tipoColegioId);
  }

}

export default new TipoColegioService();
