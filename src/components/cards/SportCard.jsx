import Image from "next/image";

export default function SportCard({ sport }) {
  return (
    <div className="flex flex-col justify-start rounded-md place-content-between items-center gap-[14px] bg-white h-[280px] w-[200px] sm:h-[304px] sm:w-[226px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] p-[16px] pt-[32px]">
      <div className="flex flex-col items-center gap-[10px] w-full">
        {/* image */}
        <div className="w-full">
          <Image src={sport.imgSrc} alt={sport.title} width={500} height={500} className="h-36 w-full object-cover" />
        </div>
        {/* name */}
        <h3 className="font-bold">{sport.title} - {sport.hour}</h3>
      </div>
    </div>
  )
}