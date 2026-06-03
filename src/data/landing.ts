export type InvitationDesign = {
  name: string
  tone: string
  price: string
  previewClass: string
}

export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const invitationDesigns: InvitationDesign[] = [
  {
    name: 'Linen Garden',
    tone: 'Botanical',
    price: 'Rp149k',
    previewClass:
      'bg-[#dfe9dd] bg-[linear-gradient(150deg,rgba(255,255,255,0.44),rgba(255,255,255,0))] text-[#24312d]',
  },
  {
    name: 'Modern Vow',
    tone: 'Minimal',
    price: 'Rp129k',
    previewClass: 'bg-[#263631] text-[#fffaf4]',
  },
  {
    name: 'Rose Ceremony',
    tone: 'Romantic',
    price: 'Rp159k',
    previewClass:
      'bg-[#ead7d6] bg-[linear-gradient(150deg,rgba(255,255,255,0.55),rgba(255,255,255,0))] text-[#24312d]',
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Pick a design',
    description: 'Browse curated templates and filter by tone, color, and ceremony style.',
  },
  {
    number: '02',
    title: 'Personalize details',
    description: 'Add names, stories, event schedules, RSVP fields, gallery, and maps.',
  },
  {
    number: '03',
    title: 'Share instantly',
    description: 'Publish a mobile-ready invitation link for family and friends.',
  },
]
