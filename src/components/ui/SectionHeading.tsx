import { eyebrowClass, headingClass } from '../../styles/classes'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  inverse?: boolean
}

export function SectionHeading({ description, eyebrow, inverse = false, title }: SectionHeadingProps) {
  return (
    <div className="max-w-[760px]">
      <p className={`${eyebrowClass} ${inverse ? 'text-[#fffaf4]' : ''}`}>{eyebrow}</p>
      <h2
        className={`${headingClass} mb-3.5 text-[clamp(2.05rem,4vw,4rem)] ${
          inverse ? 'text-[#fffaf4]' : ''
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-[1.06rem] leading-[1.7] ${inverse ? 'text-[#fffaf4]' : 'text-[#65716d]'}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
