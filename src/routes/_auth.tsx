// import { getCurrentUser } from '@/server/functions/auth'
import { redirect } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  loader: async ({ location }) => {
    const currentUser = null // await getCurrentUser()

    if (currentUser && location.pathname !== '/sign-out') {
      throw redirect({ to: '/' })
    }

    return {
      currentUser,
    }
  },
})
