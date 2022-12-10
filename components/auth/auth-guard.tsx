import { useAuth } from "./auth-provider"
import { useRouter } from "next/router"
import { useEffect } from "react"
import LinearProgress from "@mui/material/LinearProgress"

export function AuthGuard({ children }: { children: JSX.Element }) {
  const { user, initializing, setRedirect } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!initializing) {
      if (!user) {
        setRedirect(router.route)
        router.push("/signup")
      }
    }
  }, [initializing, router, user, setRedirect])

  if (initializing) {
    return <LinearProgress />
  }

  if (!initializing && user) {
    return <>{children}</>
  }

  return null
}