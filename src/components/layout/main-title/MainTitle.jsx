import { Divider } from "@nextui-org/divider";

export default function MainTitle({title}) {
  return (
    <>
      <h1 className="text-4xl font-bold mt-12">{title}</h1>
      <Divider className="mt-10" />
    </>
  )
}