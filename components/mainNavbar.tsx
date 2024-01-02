"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

import { ModeToggle } from "./modeToggle"
import NDLogo from "@/public/images/logo/ND_Logo.svg"
import BugerMenu from "./bugerMenu"

function mainNavbar() {
  return (
    <>
      <div className="w-full flex justify-around mx-auto">
        <BugerMenu />
        <div className="bg-white flex w-1/3 sm:w-1/6 mx-auto sm:mx-3 sm:px-4 py-5 justify-center">
          <Link href={"/"}>
            <Image src={NDLogo} alt="Nouvelles Donnes" width={150} height={50} />
          </Link>
        </div>
        <div className="bg-purple-600 hidden sm:flex">
          <ul className="flex mx-3 py-5 justify-around">
            <li className="px-3">
              <Link href={"/"}>Accueil</Link>
            </li>
            <li className="px-3">
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="flex mx-auto sm:mx-3 sm:px-4 py-4 justify-center">
          <div className="mr-2">
            <ModeToggle />
          </div>
          <div className="hidden sm:flex">
            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default mainNavbar
