import { eyebrowClass, headingClass } from '../styles/classes'
import { StatCard } from './cards/StatCard'
import { HeroPreview } from './HeroPreview'
import { ButtonLink } from './ui/ButtonLink'

const stats = [
  { label: 'designs planned', value: '120+' },
  { label: 'to preview', value: '3 min' },
  { label: 'first invitations', value: 'Mobile' },
]

export function HeroSection() {
  return (
    <section
      className="grid min-h-[calc(100vh-150px)] grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] items-center gap-9 px-5 py-9 pb-[34px] md:px-[5vw] md:py-[6vw] xl:gap-24 xl:px-[72px] xl:py-[78px] max-[980px]:grid-cols-1 max-[980px]:py-12"
      id="top"
    >
      <div className="max-w-[720px]">
        <p className={eyebrowClass}>Online wedding invitation market</p>
        <h1
          className={`${headingClass} mb-6 text-[clamp(3rem,7vw,6.8rem)] leading-[0.94] max-sm:text-[3.2rem]`}
        >
          Find a wedding invitation design that already feels like you.
        </h1>
        <p className="mb-7 max-w-[610px] text-[1.15rem] leading-[1.75] text-[#56615d]">
          iWed helps couples discover ready-to-customize digital invitation templates, compare
          styles, and launch a beautiful invite without starting from a blank page.
        </p>

        <div className="mb-[34px] flex flex-wrap items-center gap-3">
          <ButtonLink href="#catalogue">
            Explore catalogue
          </ButtonLink>
          <ButtonLink href="#how-it-works" variant="outline">
            See how it works
          </ButtonLink>
        </div>

        <dl className="m-0 flex flex-wrap items-center gap-2.5" aria-label="Marketplace highlights">
          {stats.map((stat) => (
            <StatCard label={stat.label} value={stat.value} key={stat.label} />
          ))}
        </dl>
      </div>

      <HeroPreview />
    </section>
  )
}
