import axios from 'axios';
import data from './json/agencias.json';

const fetchAll = () =>
    new Promise((resolve) => {
        resolve({ data });
    });

export default {
    fetchAll
};
