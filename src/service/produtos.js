import { http } from './config';
// import axios from 'axios';

export default {
    listar: () => {
        return http.get('produtos')
    },
    salvar: (produto) => {
        return http.post('produtos', produto)
    },
    atualizar: (produto) => {
        return http.put(`produtos/${produto}`)

    },
    apagar: (produto) => {
        return http.delete(`produtos/${produto}`)

    }
}