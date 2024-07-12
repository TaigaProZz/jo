import TicketCard from "@/components/cards/TicketCard";
import axios from "axios";
import MainTitle from "@/components/layout/main-title/MainTitle";
import PrimaryButton from "@/components/buttons/PrimaryButton";

async function fetchTickets() {
  const response = await axios.get("http://localhost:3000/ticket");
  return response.data;
}

export default async function Formules() {
  let tickets = [];
  let isLoading = true;

  try {
    tickets = await fetchTickets();
  } catch (error) {
    console.log(error);
  } finally {
    isLoading = false;
  }

  return (
    <>
      <MainTitle title="Nos tickets" />
      {/* List of TicketCard */}
      <div className="flex justify-center">
        <ul className="flex flex-col md:flex-wrap md:flex-row gap-20 mt-20 ">
          {
            tickets.length > 0 ?
              tickets.map((ticket, index) => (
                <li key={index}>
                  <TicketCard ticket={ticket} />
                </li>
              ))
              : isLoading ? "Chargement" : "Aucuns ticket trouvés"
          }
        </ul>
      </div>
    </>
  );
}
