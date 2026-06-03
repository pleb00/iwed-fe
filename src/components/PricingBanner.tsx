import { ButtonLink } from './ui/ButtonLink'
import { Container } from './ui/Container'
import { SectionHeading } from './ui/SectionHeading'

export function PricingBanner() {
  return (
    <Container
      className="mt-12 mb-12 flex items-center justify-between gap-7 rounded-lg bg-[#24312d] p-7 text-[#fffaf4] md:p-[5vw] xl:p-[52px] max-sm:flex-col max-sm:items-start"
      id="pricing"
    >
      <SectionHeading
        eyebrow="Coming catalogue"
        title="Built for couples who want choice without chaos."
        inverse
      />
      <ButtonLink className="shrink-0 shadow-none" href="#catalogue" variant="light">
        Preview designs
      </ButtonLink>
    </Container>
  )
}
