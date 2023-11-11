import axios from 'axios';

const COLEGIO_API_URL = "http://localhost:9000/colegio/";

class ColegioService {

    getColegios(){
        return axios.get(COLEGIO_API_URL);
    }

    createColegio(colegio){
        return axios.post(COLEGIO_API_URL, colegio);
    }

    getColegioById(colegioId){
        return axios.get(COLEGIO_API_URL + '/' + colegioId);
    }

    getColegioByRut(colegioRut){
        return axios.get(COLEGIO_API_URL + '/' + colegioRut);
    }
}

export default new ColegioService()