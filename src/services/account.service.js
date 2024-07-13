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
