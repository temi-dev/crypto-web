import { useAuth } from "./auth-provider"
import { useRouter } from "next/router"
import { useEffect } from "react"

export function AuthGuard({ children }: { children: JSX.Element }) {
  const { user, initializing, setRedirect } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!initializing) {
      if (!user) {
        setRedirect(router.route)
        window.location.href = '/'
        // router.push("/signup")
      }
    }
  }, [initializing, router, user, setRedirect])

  if (initializing) {
    return <h1>Application Loading</h1>
  }

   if (!initializing && user) {
    return <>{children}</>
  }

  return null
}