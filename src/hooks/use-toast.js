import { useState } from "react"

let listeners = []
let count = 0
let toasts = []

export function useToast() {
  const [_, setTick] = useState(0)

  const notify = () => setTick((n) => n + 1)
  const subscribe = (fn) => {
    listeners.push(fn)
    return () => (listeners = listeners.filter((l) => l !== fn))
  }

  const toast = ({ title, description }) => {
    const id = ++count
    const newToast = { id, title, description }
    toasts.push(newToast)
    listeners.forEach((fn) => fn(toasts))
    setTimeout(() => {
      toasts = toasts.filter((t) => t.id !== id)
      listeners.forEach((fn) => fn(toasts))
    }, 3000)
  }

  const [localToasts, setLocalToasts] = useState(toasts)
  useState(() => subscribe(setLocalToasts), [])

  return { toast, toasts: localToasts }
}
