import HeroButton from "@/components/buttons/HeroButton";
import Link from "next/link";

export default function Page () { 
  return (
    <div className="h-hero w-full flex flex-col justify-center items-center bg-center bg-[url('/assets/bg/hero-section.svg')] bg-no-repeat">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">JEUX OLYMPIQUES<br />DE PARIS<br />2024</h1>
      <Link href="/formules">
        <HeroButton text={"Réserver son ticket"} />
      </Link>
    </div>
  );
}