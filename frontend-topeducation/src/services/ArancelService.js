import axios from "axios";

//local
//const ARANCEL_API_URL = "http://localhost:9003/arancel/";

//k8s
const ARANCEL_API_URL = "http://34.41.239.179:9000/arancel/";

class ArancelService {
  getAranceles() {
    return axios.get(ARANCEL_API_URL);
  }

  createArancel(arancel) {
    return axios.post(ARANCEL_API_URL, arancel);
  }

  getArancelById(arancelId) {
    return axios.get(ARANCEL_API_URL + "/" + arancelId);
  }

}

export default new ArancelService();
