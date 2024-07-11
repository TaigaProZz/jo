import { Divider } from "@nextui-org/divider";

export default function MainTitle({title, center}) {
  return (
    <>
      <h1 className={`text-4xl font-bold mt-12 ${center ? 'text-center' : ''}`}>{title} {center}</h1>
      <Divider className="mt-10" />
    </>
  )
}