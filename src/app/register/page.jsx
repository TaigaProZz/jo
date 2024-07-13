'use client'

import { Checkbox, Input } from "@nextui-org/react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/services/account.service";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import Link from "next/link";
import toast from "react-hot-toast";


export default function Index() {
  const router = useRouter()
  const [isSelected, setIsSelected] = useState(false);
  const emailRef = useRef();
  const password1 = useRef();
  const password2 = useRef();
  const lastName = useRef();
  const firstName = useRef();


  const formHandler = async (event) => {
    event.preventDefault();
    const data = {
      email: emailRef.current?.value.toLowerCase(),
      password: password1.current?.value,
      password2: password2.current?.value,
      surname: lastName.current?.value,
      name: firstName.current?.value,
    }

    // check if inputs are empty
    if (!data.email || !data.password || !data.password2 || !data.surname || !data.name) return toast.error('Veuillez remplir tous les champs.');

    // check if passwords match
    if(!(data.password === data.password2)) return toast.error('Les mots de passe ne sont pas identiques.');

    // check if checkbox is checked
    if(!isSelected) return toast.error('Vous devez accepter la politique de confidentialité.')

    // delete unnecesseraly password 2
    delete data.password2;
    
    try {
      await toast.promise(
        register(data),
        {
          loading: 'Inscription...',
          success: 'Inscription réussie ! Vous pouvez vous connecter.',
          error: (err) => `Inscription échouée : ${err || ''}`,
        },
      );
      console.log('scc');
      // go to login
      router.push('/login')
    } catch (err) { }
  }
 

  return (
    <div className="h-[50rem] flex items-center justify-center">
      <form onSubmit={formHandler} className="rounded-lg flex justify-between items-center px-10 pt-10 pb-6 flex-col h-[41rem] w-full md:w-96 bg-radial-custom-gradient drop-shadow-[0_4px_8px_rgba(0,0,0,0.65)]">
        <div className="w-full flex flex-col items-center gap-6 ">
          <h1 className="text-2xl font-bold drop-shadow-[0_6px_8px_rgba(0,0,0,0.)] ">S'inscrire</h1>
          {/* email */}
          <Input ref={emailRef} isRequired type="email" label="Email" placeholder="Entrez votre email" className="dark drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]" />

          {/* passwords */}
          <Input ref={password1} isRequired type="password" label="Mot de passe" placeholder="Entrez votre mot de passe" className="dark drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]" />
          <Input ref={password2} isRequired type="password" label="Répéter mot de passe" placeholder="Confirmez votre mot de passe" className="dark drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]" />
          
          {/* names */}
          <Input ref={lastName} isRequired type="text" label="Votre nom" placeholder="Entrez votre nom" className="dark drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]" />
          <Input ref={firstName} isRequired type="text" label="Votre prénom" placeholder="Entrez votre prénom" className="dark drop-shadow-[0_4px_8px_rgba(0,0,0,0.45)]" />
          
          {/* checkbox */}
          <div className="w-full">
            <Checkbox isSelected={isSelected} onValueChange={setIsSelected} className="text-text2">
              <p className="text-text2 text-sm">J'accepte la <Link href="/pdc" className="text-creme">politique de confidentialité</Link></p>
            </Checkbox>
          </div>
        </div>

        {/* sign up button */}
        <div className="w-full flex flex-col items-center gap-2">
          <PrimaryButton text="S'inscrire" type="submit" />
          <p>Déjà inscrit ? <Link href='/login'><span className="underline underline-offset-2">Connectez-vous ici</span></Link></p>
        </div>
      </form>
    </div>

  )
}