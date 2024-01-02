import Image from "next/image"

function HomeHero() {
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col mx-auto px-4 align-middle items-center">
        <h1 className="text-5xl text-purple-600 font-bold">Nouvelles Donnes</h1>
        <p className="text-2xl w-full mx-auto">Le site des comptes-rendus de séance</p>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Evaluation"
        width={500}
        height={400}
        className=" hero rounded-xl"
      />
    </div>
  )
}

export default HomeHero
