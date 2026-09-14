import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/services/mental-health')({
  beforeLoad: () => {
    throw redirect({
      to: '/services',
    })
  },
})
