import axios from 'axios'

export const axiosi = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL, // Backend'in çalıştığı sunucunun URL'si
    withCredentials: true // Eğer cookie'ler kullanıyorsanız
  });