import NextImage from "next/image";
import Link from "next/link";
import logo from '../../../../public/assets/logo/logo-jo.svg'
import { Divider } from "@nextui-org/react";

export default function Footer () {
  const firstSideElements = [
    { name: "Conditions générale de vente", href: "/cgv"},
    { name: "Conditions générale d'utilisation", href: "/cgu" },
    { name: "Politique de confidentialité", href: "/pdc" },
    { name: "Conditions générale de vente", href: "/cgv" },
  ]

  const secondSideElements = [
    { name: "A propos", href: "/about" },
    { name: "Formules", href: "/formules" },
    { name: "Mon profil", href: "/profile" },
    { name: "© Copyright 2024. Made by Taiga ProZz", href: "https://github.com/taigaprozz/" },
  ]
  return (
    <footer className="w-full flex flex-col items-center gap-6 py-6 md:gap-16 lg:gap-40 md:justify-center md:flex-row">
      {/* footer logos */}
      <div className="w-full flex flex-col items-center text-center gap-6 md:flex-row md:justify-end md:text-left">
        <NextImage
          priority
          src={logo}
          alt="jo 2024 paris"
        />
        {/* first side */}
        <div className="flex flex-col gap-3">
          {
            firstSideElements.map((e, index) => (
              <Link key={index} href={e.href} className="hover:text-creme">{e.name}</Link>
            ))
          }
        </div>
      </div>
      <Divider className="bg-white w-8/12 md:hidden" orientation="horizontal"/>
      {/* last side */}
      <div className="w-full flex flex-col items-center text-center gap-6 md:items-start md:text-left">
        <div className="flex flex-col gap-3">
          {
            secondSideElements.map((e, index) => (
              <Link key={index} href={e.href} target={secondSideElements.length - 1 === index ? '_blank' : ""} className="hover:text-creme">{e.name}</Link>
            ))
          }
        </div>
      </div>
    </footer>
  )
}