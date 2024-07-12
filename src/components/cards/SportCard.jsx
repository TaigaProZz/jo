import Image from "next/image";

export default function SportCard({ sport }) {
  return (
    <div className="flex flex-col justify-start rounded-[20px] place-content-between gap-[14px] bg-graySecondary text-text2 h-[280px] w-full max-w-[250px] sm:h-[306px] sm:max-w-none sm:w-[304px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)] p-[16px] pt-[32px]">
      <div className="flex flex-col gap-[35px] w-full">
        {/* image */}
        <div className="w-full">
          <Image src={sport.imgSrc} alt={sport.title} width={500} height={500} className="h-36 w-full object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          {/* name */}
          <h3 className="font-semibold text-[18px]">{sport.title}</h3>
          {/* hour */}
          <h3 className="text-[14px]">{sport.hour}</h3>
        </div>
        
      </div>
    </div>
  )
}