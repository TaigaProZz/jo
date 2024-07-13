import TicketCard from "@/components/cards/TicketCard";
import MainTitle from "@/components/layout/main-title/MainTitle";
import fetchTickets from "@/services/formule.service";

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
