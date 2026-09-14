import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/services/oncology')({
  beforeLoad: () => {
    throw redirect({
      to: '/services',
    })
  },
})
