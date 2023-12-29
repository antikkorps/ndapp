import Image from "next/image"
import { ModeToggle } from "@/components/modeToggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to the home page</h1>
      <ModeToggle />
    </main>
  )
}
