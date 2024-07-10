'use client'

import { Button } from "@nextui-org/button";

export default function PrimaryButton({ text }) {
  return (
    <Button className="bg-creme rounded-md px-4 py-6 w-[155px] text-[18px]">{text}</Button>
  )
}
