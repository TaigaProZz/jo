'use client'

import { useUser } from "@/context/UserContext";
import { useRef } from "react";
import { login } from "@/services/account.service";

import { Input } from "@nextui-org/react";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";


export default function Login() {
  const router = useRouter()
  const { user, setUser } = useUser();

  const emailRef = useRef();
  const passwordRef = useRef();

  const formHandler = async (event) => {
    event.preventDefault();

    // get data from inputs
    const data = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value
    };

    // check if inputs are not empty
    if(!data.email || !data.password || !data.email && !data.password) return toast.error('Veuillez remplir tous les champs.')
  
    // print a toast for the promise
    try {
      const response = await toast.promise(
        login(data),
        {
          loading: 'Connexion...',
          success: 'Connexion réussie !',
          error: (err) => `Connexion échouée : ${err.response.data.message || ''}`,
        }
      );
      // update user context
      setUser(response)
      router.push('/profile')
    } catch (err) {}
  };

  return (
      <div className="h-[50rem] flex items-center justify-center">
        <form className="rounded-lg flex justify-between items-center px-10 pt-10 pb-6 flex-col h-[30rem] w-full md:w-96 bg-radial-custom-gradient drop-shadow-[0_4px_8px_rgba(0,0,0,0.65)]" onSubmit={formHandler}>
          <div className="w-full flex flex-col items-center gap-6">
            <h1 className="text-2xl font-bold drop-shadow-[0_6px_8px_rgba(0,0,0,0.)]">Se connecter</h1>
            <Input isRequired ref={emailRef} type="email" label="Email" placeholder="Entrez votre email" className="dark drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]" />
            <Input isRequired ref={passwordRef} type="password" label="Mot de passe" placeholder="Entrez votre mot de passe" className="dark drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]" />
            <p className="text-end w-full underline underline-offset-2">Mot de passe oublié ?</p>
          </div>
          <div className="w-full flex flex-col items-center gap-2">
            <PrimaryButton text="Se connecter" type="submit" />
            <p>Pas encore inscrit ? <span className="underline underline-offset-2">Inscrivez-vous ici</span></p>
          </div>
        </form>
      </div>    
  );
}
