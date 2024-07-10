import TicketCard from "@/components/cards/TicketCard";
import axios from "axios";

async function fetchTickets() {
  const response = axios.get("http://localhost:3000/ticket")
  return response;
}
export default async function Formules() {
  // const tickets = await fetchTickets();

  return (
    <>
     CARTE ticket

    </>

  )
}