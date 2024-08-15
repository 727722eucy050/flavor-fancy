import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/orders';

export const createOrder = (Order1) => {
    return axios.post(API_BASE_URL, Order1);
};
