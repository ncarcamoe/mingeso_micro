import axios from 'axios';

const ESTUDIANTE_API_URL = "http://localhost:9000/tipoColegio/";

class TipoColegioService {

    getTipoColegios(){
        return axios.get(ESTUDIANTE_API_URL);
    }

    createTipoColegio(tipoColegio){
        return axios.post(ESTUDIANTE_API_URL, tipoColegio);
    }

    getTipoColegioById(tipoColegioId){
        return axios.get(ESTUDIANTE_API_URL + '/' + tipoColegioId);
    }

    getTipoColegioByRut(tipoColegioRut){
        return axios.get(ESTUDIANTE_API_URL + '/' + tipoColegioRut);
    }
}

export default new TipoColegioService()