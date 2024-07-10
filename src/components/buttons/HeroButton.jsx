'use client'

import { Button } from "@nextui-org/button";

export default function HeroButton({text}) {
  return (
    <Button className="bg-creme rounded-md p-6">{text}</Button>
  )
}
