import type { InvitationDesign } from '../data/landing'
import { DesignCard } from './cards/DesignCard'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'

type CatalogueSectionProps = {
  designs: InvitationDesign[]
}

export function CatalogueSection({ designs }: CatalogueSectionProps) {
  return (
    <Container className="pt-[72px] pb-[34px]" id="catalogue">
      <div className="mb-[34px]">
        <SectionHeading
          eyebrow="Catalogue preview"
          title="Start with a design, then make it yours."
          description="The marketplace will group invitations by mood, layout, cultural moment, and budget so couples can compare options quickly."
        />
      </div>

      <div className="grid grid-cols-3 gap-[18px] max-[980px]:grid-cols-1">
        {designs.map((design) => (
          <DesignCard design={design} key={design.name} />
        ))}
      </div>
    </Container>
  )
}
