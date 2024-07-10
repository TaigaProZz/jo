import TicketCard from "@/components/cards/TicketCard";
import axios from "axios";
import MainTitle from "@/components/layout/main-title/MainTitle";

async function fetchTickets() {
  const response = axios.get("http://localhost:3000/ticket")
  return response;
}
export default async function Formules() {
  const tickets = await fetchTickets(); 

  return (
    <>
      <MainTitle title="Nos tickets" />
      <div className="flex mt-20">
        {/* list of TicketCard */}
        <ul className="flex flex-wrap gap-12">
          {
            tickets ?
              tickets.data.map((v, i) => (
                <li key={i} className="flex justify-start">
                  <TicketCard  ticket={v} />
                </li>
              ))
              : "fetching"
          }
        </ul>
      </div>
    </>
  
  )
}