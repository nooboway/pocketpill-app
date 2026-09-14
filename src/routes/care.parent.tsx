import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/care/parent')({
  beforeLoad: () => {
    throw redirect({
      to: '/lineage',
    })
  },
})
