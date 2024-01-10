"use client"
import { useState, FormEvent } from "react"

// create a new user with a simple form

export default function NewUserPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <div>
      <h1>Create a new user</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}
