import HomeHero from "@/components/homeHero"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to the home page</h1>

      <HomeHero />
    </main>
  )
}
