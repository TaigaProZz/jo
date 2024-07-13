import { axiosBase } from './axios.js'
import getUser from './user.service.js';

export async function login (credentials) {
  try {
    await axiosBase().post('/auth/login', credentials);
    return await getUser();
  } catch (error) {
    throw error;
  }
}

export async function register (credentials) {
  try {
    return await axiosBase().post('/user/', credentials);
  } catch (error) {
    const errMessage = error.response.data.message;
    if (errMessage === "Email already exists") throw ('Email déjà enregistré.')
    throw error;
  }
}
