import type { ProcessStep } from '../data/landing'
import { StepCard } from './cards/StepCard'
import { Container } from './ui/Container'

type StepsSectionProps = {
  steps: ProcessStep[]
}

export function StepsSection({ steps }: StepsSectionProps) {
  return (
    <Container
      className="mt-12 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-[#24312d1a] bg-[#24312d1a] max-[980px]:grid-cols-1"
      id="how-it-works"
    >
      {steps.map((step) => (
        <StepCard step={step} key={step.number} />
      ))}
    </Container>
  )
}
