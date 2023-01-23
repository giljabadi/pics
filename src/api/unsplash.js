import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID q2y3WSbXykAxx3qHFGz7iYcr8SjcHsG4do29vMm2pgU',
    },
});


