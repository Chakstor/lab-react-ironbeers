import axios from 'axios'

const request = axios.create({
    baseURL: 'https://ih-beers-api2.herokuapp.com/beers'
});

export const getAllBeers = async () => {
    const res = await request.get('/');
    return res.data;
};

export const getBeer = async (id) => {
    const res = await request.get(`/${id}`);
    return res.data;
};

export const getRandomBeer = async () => {
    const res = await request.get('/random');
    return res.data;
};

export const newBeer = async (formData) => {
    const res = await request.post('/new', formData);
    return res.data;
};

export const searchBeer = async (q) => {
    const res = await request.get(`/search?q=${q}`);
    return res.data;
}