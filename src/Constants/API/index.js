import axios from 'axios';

export default axios.create({
    baseURL: 'https://booking-back-azure.vercel.app/',
    headers: {
        'Content-type': 'application/json',
    },
    timeout: 1000 * 100,
});