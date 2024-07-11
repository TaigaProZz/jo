import NextImage from "next/image";
import HeroButton from "@/components/buttons/HeroButton";
import SportCard from "@/components/cards/SportCard";
import MainTitle from "@/components/layout/main-title/MainTitle";
import Link from "next/link";
import heroBg from "../../public/assets/bg/bg-jo.jpg"

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
    {
      id: 4,
      title: "Athlétisme",
      hour: "10h00",
      imgSrc: "/assets/sports/athletics.jpg"
    },
    {
      id: 5,
      title: "Natation",
      hour: "13h00",
      imgSrc: "/assets/sports/pool.jpg"
    },
    {
      id: 6,
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
      title: "Basket 3c3",
      hour: "13h00",
      imgSrc: "/assets/sports/basket.jpg"
    },
    {
      id: 3,
      title: "Golf",
      hour: "16h00",
      imgSrc: "/assets/sports/golf.jpg"
    },
    {
      id: 4,
      title: "Athlétisme",
      hour: "10h00",
      imgSrc: "/assets/sports/athletics.jpg"
    },
    {
      id: 5,
      title: "Natation",
      hour: "13h00",
      imgSrc: "/assets/sports/pool.jpg"
    },
    {
      id: 6,
      title: "Tir à l'arc",
      hour: "16h00",
      imgSrc: "/assets/sports/archery.jpg"
    },
  ]
  return (
    <>
      {/* hero page image */}
      <div className="h-hero w-full flex flex-col items-center justify-center gap-10 sm:flex-row sm:gap-12 md:gap-20">
        {/* main title */}
        <div className="flex sm:h-full sm:w-4/12 flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">JEUX OLYMPIQUES<br />DE PARIS<br />2024</h1>
          <Link href="/formules">
            <HeroButton text={"Réserver son ticket"} />
          </Link>
        </div>
        {/* image */}
        <div className="h-30 md:min-w-[300px] max-w-[800px]">
          <NextImage
            src={heroBg}
            className="object-fill"
            alt="anneaux des jeux olmypiques"
          />
        </div>
      </div>

      {/* sport calendar section */}
      {/* title */}
      <div className="mt-[80px]">
        <MainTitle title="Calendrier des sports" />
        {/* container */}
        <div className="flex flex-col w-full gap-[56px] mt-[26px]">
          {/* day 1 */}
          <section className="flex flex-col gap-[56px]">
            <h2 className="font-bold text-3xl">Jour 1</h2>
            <div className="flex flex-col flex-wrap items-center lg:flex-row gap-[20px] md:gap-[20px] lg:gap-[40px] md:ml-8">
              {
                dayOneSports.map((v, i) => (
                  <SportCard key={i} sport={v} />
                ))
              }
            </div>
          </section>

          {/* day 2 */}
          <section className="flex flex-col gap-[56px]">
            <h2 className="font-bold text-3xl">Jour 2</h2>
            <div className="flex flex-col flex-wrap items-center lg:flex-row gap-[20px] md:gap-[20px] lg:gap-[40px] md:ml-8">
              {
                dayDaySports.map((v, i) => (
                  <SportCard key={i} sport={v} />
                ))
              }
            </div>
          </section>
        </div>
      </div>
    </>
  );
}