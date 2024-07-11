'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Image, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, Spacer, Divider, DropdownSection } from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import { useState } from "react";
import Link from 'next/link'

export default function NavbarLayout() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = true;
  const user = {
    id: 1,
    email: "aa@gmail.com",
    photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    cartItems: 2,
  }

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Formules", href: "/formules" },
    { name: "A propos", href: "/about" },
    { name: "Se connecter", href: "/login" },
    { name: "S'inscrire", href: "/register" },
  ];

  const dropdownItem = [
    { name: "Mon Compte", href: "/profile" },
    { name: "Mes Achats", href: "/purchases" },
    { name: "Mon Panier", href: "/cart" }, 
  ]

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  }

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "px-2",
          "relative",
          "h-full",
          "items-center",
          "justify-around",
          "data-[active=true]:font-normal	",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-creme",
        ],
      }}
    >

      {/* burger menu ico */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <div className="flex items-center h-full">
        {/* ico and title */}
        <NavbarBrand className="justify-center md:justify-start mr-6">
          <Link className="flex items-center" color="foreground" href="/">
            <Image src="/assets/logo/logo-jo.svg" alt="jo 2024 paris" />
            <p className="font-bold text-inherit ml-3 hidden lg:flex">JO 2024</p>
          </Link>
        </NavbarBrand>

        {/* elements */}
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {navItems.slice(1, 3).map((item, index) => (
            <NavbarItem key={index} isActive={pathname === item.href ? true : false}>
              <Link color="foreground" href={item.href} className="h-full flex items-center">
                {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
      </div>
     

      {/* login and register btn */}
      {
        // USER NOT LOGGED IN
        !isLoggedIn ?
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex" isActive={pathname === '/login' ? true : false}>
              <Link href="/login" className="h-full flex items-center">
                Connexion
              </Link>
            </NavbarItem>
            <NavbarItem >
              <Button as={Link} className={pathname === '/register' ? "bg-creme" : "bg-gray-300"} href="/register" variant="flat">
                S'inscrire
              </Button>
            </NavbarItem>
          </NavbarContent>
          :

          // USER LOGGED IN
          // cart and avatar
          <NavbarContent justify="end">
            {/* cart item */}
            <NavbarItem className="hidden sm:flex mr-6 pt-2" isActive={pathname === '/cart' ? true : false}>
              <Link href="/cart" className="h-full flex items-center">
                <div className="flex items-center justify-center relative">
                  <p>Panier</p>
                  <Image src="/assets/icons/shopping-cart.svg" alt="cart" className="h-8 w-6 ml-2" />
                  <p className="absolute bottom-3 left-[4.7rem] font-bold rounded-full bg-creme h-7 w-7 text-center content-center">
                    {user.cartItems}
                  </p>
                </div>
              </Link>
            </NavbarItem>

            <NavbarItem>
              {/* avatar dropdown */}
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Image
                    className="h-10 w-10 cursor-pointer"
                    src="/assets/icons/user-ico.svg"
                    alt="user dropdown"
                  />
                </DropdownTrigger>
                {/* email */}
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                  <DropdownSection showDivider>
                    <DropdownItem key="profile" className="h-14 gap-2">
                      <Link href="/profile">
                        <p className="font-semibold">Connecté avec</p>
                        <p className="font-semibold">{user.email}</p>
                      </Link>
                    </DropdownItem>
                  </DropdownSection>

                  {/* top section */}
                  <DropdownSection showDivider>
                    {dropdownItem.map((item, index) => (
                      <DropdownItem key={index}>
                        <Link href={item.href}> 
                          {item.name}
                        </Link>
                      </DropdownItem>
                    ))}
                  </DropdownSection>

                  {/* logout */}
                  <DropdownSection>
                    <DropdownItem key="logout" className="mt-1" color="danger">
                      Déconnexion
                    </DropdownItem>
                  </DropdownSection>

                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </NavbarContent>
      }

      {/* burger menu */}
      <NavbarMenu>
        {navItems.map((item, index) => (
          <NavbarMenuItem key={index} isActive={pathname === item.href ? true : false} onClick={handleMenuClose}>
            <Link
              className={`w-full`}
              color={
                index === 1 ? "warning" : index === navItems.length - 1 ? "danger" : "foreground"
              }
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
