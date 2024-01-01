"use client"
import Link from "next/link"
import { ModeToggle } from "./modeToggle"

function mainNavbar() {
  return (
    <>
      <div className="container flex justify-around">
        <div className="bg-purple-600 flex mx-3 px-4 py-5 justify-center">logo</div>
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
