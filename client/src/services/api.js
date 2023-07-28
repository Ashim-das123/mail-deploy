import axios from 'axios';

const API_URL = '';

const API_GMAIL = async (urlObject, payload, type) => {// We can call different ways 1. axios.post(),2.interceptors 3.axios api as a  function
    return await axios({
        method: urlObject.method,
        url: `${API_URL}/${urlObject.endpoint}/${type}`,
        data: payload

    })
}
export default API_GMAIL;