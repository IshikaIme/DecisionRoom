import type { CollectionSchema } from 'deepspace/schema'

const text = (name: string) => ({ name, storage: 'text' as const, interpretation: 'plain' as const })
const permissions = {
  member: { read: true, create: true, update: 'own' as const, delete: 'own' as const },
  admin: { read: true, create: true, update: true, delete: true },
}
export const decisionSchemas: CollectionSchema[] = [
  { name: 'decisions', columns: ['title', 'description', 'summary', 'summarySnapshot'].map(text), permissions },
  { name: 'proposals', columns: ['roomId', 'title', 'pros', 'cons'].map(text), permissions },
  { name: 'ballots', columns: ['roomId', 'proposalId'].map(text), permissions },
]
