import Link from "next/link";
import PrimaryButton from "../buttons/PrimaryButton";
export default function TicketCard({ticket}) {
  return (
    <div className="flex flex-col justify-start rounded-md place-content-between gap-[14px] relative items-center bg-white h-[305px] w-[234px] sm:h-[345px] sm:w-[274px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] p-[16px] pt-[32px]">
      {/* price */}
      <p className="text-[20px] rounded font-bold absolute top-[-16px] bg-kaki w-28 text-white items-center text-center">{ticket.price}€</p>
      {/* header : name and number of person admission */}
      <div className="flex flex-col items-center gap-[10px]">
        {/* name */}
        <h3 className="font-bold text-[20px]">{ticket.name}</h3>
        {/* person admission */}
        <p>{ticket.numberOfPersonsAdmission} {ticket.numberOfPersonsAdmission > 1 ? `personnes` : "personne"} </p>
      </div>
      {/* description */}
      <p className="h-full">{ticket.description}</p>
      {/* buy button */}
      <div className=" flex flex-col gap-[15px] text-center">
        <Link href={`/formules/${ticket.id}`}>
          <PrimaryButton text="Acheter" />
        </Link>
        {/* add to cart */}
        <p className="">Ajouter au panier</p>
      </div>
     
    </div>
  )
}