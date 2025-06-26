// api/campsite.js
import axios from 'axios';

const API_BASE = 'http://192.168.11.3:8080'; // ← 実際のIPに合わせて調整してください

export const login = async () => {
  const res = await axios.post(`${API_BASE}/login`, {
    username: 'admin',
    password: 'password'
  });
  return res.data.token;
};

export const getCampsites = async (token) => {
  const res = await axios.get(`${API_BASE}/campsites`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
};

export const getCampsiteDetail = async (id, token) => {
  const res = await axios.get(`${API_BASE}/campsites/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
};
