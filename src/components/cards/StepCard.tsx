import type { ProcessStep } from '../../data/landing'

type StepCardProps = {
  step: ProcessStep
}

export function StepCard({ step }: StepCardProps) {
  return (
    <article className="min-h-[230px] bg-[#fffaf4] p-7">
      <span className="font-[850] text-[#b14f5a]">{step.number}</span>
      <h3 className="mb-2 text-[1.06rem] font-bold text-[#22302b]">{step.title}</h3>
      <p className="leading-[1.7] text-[#65716d]">{step.description}</p>
    </article>
  )
}
