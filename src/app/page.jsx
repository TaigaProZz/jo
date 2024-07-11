import HeroButton from "@/components/buttons/HeroButton";
import SportCard from "@/components/cards/SportCard";
import MainTitle from "@/components/layout/main-title/MainTitle";
import Image from "next/image";
import Link from "next/link";

import heroBg from '../../public/assets/bg/hero-section.svg'


export default function Page () { 
  const dayOneSports = [
    {  
      id: 1,
      title: "Athlétisme",
      hour: "10h00",
      imgSrc: "/assets/sports/athletics.jpg"
    },
    {
      id: 2,
      title: "Natation",
      hour: "13h00",
      imgSrc: "/assets/sports/pool.jpg"

    },
    {
      id: 3,
      title: "Tir à l'arc",
      hour: "16h00",
      imgSrc: "/assets/sports/archery.jpg"

    },
  ]

  const dayDaySports = [
    {
      id: 1,
      title: "Cyclysme",
      hour: "10h00",
      imgSrc: "/assets/sports/cyclisme.webp"
    },
    {
      id: 2,
      title: "Backet 3c3",
      hour: "13h00",
      imgSrc: "/assets/sports/basket.jpg"

    },
    {
      id: 3,
      title: "Golf",
      hour: "16h00",
      imgSrc: "/assets/sports/golf.jpg"

    },
  ]
  return (
    <>
      {/* hero page image */}
      <div className="h-hero w-full flex flex-col justify-center items-center bg-center bg-[url('/assets/bg/hero-section.svg')] bg-no-repeat">
    
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">JEUX OLYMPIQUES<br />DE PARIS<br />2024</h1>
        <Link href="/formules">
          <HeroButton text={"Réserver son ticket"} />
        </Link>
      </div>
        <MainTitle center title="Calendrier des sports" />
      <div className="flex flex-col items-center w-full gap-[56px] mt-[26px]">

        {/* day 1 */}
        <section className="flex flex-col items-center gap-[56px]">
          <h2 className="font-bold text-3xl">Jour 1</h2>
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[36px] lg:gap-[56px]">
            {
              dayOneSports.map((v, i) => (
                <SportCard key={i} sport={v} />
              ))
            }
          </div>

        </section>
        {/* day 2 */}
        <section className="flex flex-col items-center gap-[56px]">
          <h2 className="font-bold text-3xl">Jour 2</h2>
          <div className="flex flex-col md:flex-row gap-[20px] md:gap-[36px] lg:gap-[56px]">
            {
              dayDaySports.map((v, i) => (
                <SportCard key={i} sport={v} />
              ))
            }
          </div>
        </section>
      </div>
    </>
  );
}