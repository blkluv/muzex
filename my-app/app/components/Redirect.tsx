"use client"

import { useEffect } from "react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"

export function Redirect() {
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (session?.user) {
      router.push("/dashboard")
    }
  }, [session, router])

  return null
}
