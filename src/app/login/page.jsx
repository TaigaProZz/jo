import PrimaryButton from "@/components/buttons/PrimaryButton";
import MainTitle from "@/components/layout/main-title/MainTitle";
import { Input } from "@nextui-org/react";

export default function Login() {
  return (
    <div className="h-[50rem] flex items-center justify-center">
      <div className="rounded-lg flex justify-between items-center px-10 pt-10 pb-6 flex-col h-[30rem] w-full md:w-96 bg-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.25)]">
        <div className="w-full flex flex-col items-center gap-6">
          <h1 className="text-2xl font-bold">Se connecter</h1>
          <Input isRequired type="email" label="Email" placeholder="Entrez votre email" />
          <Input isRequired type="password" label="Mot de passe" placeholder="Entrez votre mot de passe" />
          <p className="text-end w-full underline underline-offset-2">Mot de passe oublié ?</p>
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <PrimaryButton text="Se connecter" />
          <p>Pas encore inscrit ? <span className="underline underline-offset-2">Inscrivez-vous ici</span> </p>
        </div>
      </div>
    </div>

  )
}