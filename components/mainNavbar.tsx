"use client"
import Link from "next/link"

function mainNavbar() {
  return (
    <div>
      <ul className="flex mx-3">
        <li className="mr-2">
          <Link href={"/"}>Accueil</Link>
        </li>
        <li className="mr-2">
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
      </ul>
    </div>
  )
}

export default mainNavbar
