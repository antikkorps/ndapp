import Link from "next/link"

function MainNavbar() {
  return (
    <div>
      <ul className="flex flex-row">
        <li className="mx-3">
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li>
      </ul>
    </div>
  )
}

export default MainNavbar
