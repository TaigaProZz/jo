'use client'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Image, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { usePathname } from 'next/navigation'
import { useState } from "react";
import Link from 'next/link'

export default function NavbarLayout() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = true;

  const menuItems = [
    { name: "Accueil", href: "/" },
    { name: "Formules", href: "/formules" },
    { name: "A propos", href: "/about" },
    { name: "Se connecter", href: "/login" },
    { name: "S'inscrire", href: "/register" },
  ];

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  }


  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
    
      {/* burger menu ico */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"}  />
      </NavbarContent>

      {/* ico and title */}
      <NavbarBrand>
        <Link className="flex items-center" color="foreground" href="/">
          <img src="/assets/logo/logo-jo.svg" />
          <p className="font-bold text-inherit ml-3 hidden lg:flex">JO 2024</p>
        </Link>
      </NavbarBrand>

      {/* elements */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.slice(1, 3).map((item, index) => (
          <NavbarItem key={index} isActive={pathname === item.href ? true : false}>
            <Link
              color="foreground"
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* login and register btn */}
      {
        !isLoggedIn ?
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex" isActive={pathname === '/login' ? true : false}>
              <Link href="/login">
                Connexion
              </Link>
            </NavbarItem>
            <NavbarItem isActive={pathname === '/register' ? true : false}>
              <Button as={Link} color="primary" href="/register" variant="flat">
                S'inscrire
              </Button>
            </NavbarItem>
          </NavbarContent>
          :
          <NavbarContent as="div" justify="end">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="secondary"
                  name="Jason Hughes"
                  size="sm"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
      }
    
      {/* burger menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index} isActive={pathname === item.href ? true : false} onClick={handleMenuClose}>
            <Link
              className={`w-full`}
              color={
                index === 1 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
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
