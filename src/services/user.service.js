import { axiosBase } from "./axios";

export default async function getUser() {
  try {
    const response = await axiosBase().get("/user");
    return response.data;
  } catch (error) {
    throw error;
  }
}
