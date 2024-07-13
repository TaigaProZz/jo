import { axiosBase } from "./axios";

export default async function fetchTickets() {
  try {
    const response = await axiosBase().get("/ticket");
    return response.data;
  } catch (error) {
    throw error;
  }
}