"use client"
import Link from "next/link"
import Image from "next/image"
import { ModeToggle } from "./modeToggle"
import NDLogo from "@/public/images/logo/ND_Logo.svg"

function mainNavbar() {
  return (
    <>
      <div className="container flex justify-around">
        <div className="bg-white flex mx-3 px-4 py-5 justify-center">
          <Link href={"/"}>
            <Image src={NDLogo} alt="Nouvelles Donnes" width={150} height={50} />
          </Link>
        </div>
        <div className="bg-purple-600 ">
          <ul className="flex mx-3 py-5 justify-around">
            <li className="px-3">
              <Link href={"/"}>Accueil</Link>
            </li>
            <li className="px-3">
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
          </ul>
        </div>
        <div className="flex mx-3 px-4 py-4 justify-center">
          <ModeToggle />
        </div>
      </div>
    </>
  )
}

export default mainNavbar
