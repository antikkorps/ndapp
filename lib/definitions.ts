export type User = {
  id: string
  name: string
  email: string
  password: string
}

export type Customer = {
  id: string
  name: string
  email: string
  image_url: string
}

export type Evaluation = {
  id: string
  customer_id: string
  amount: number
  date: string
  status: "pending" | "done"
  appels: string
}

export type EvaluationForm = {
  id: string
  customer_id: string
  appels: string
  status: "pending" | "done"
}
